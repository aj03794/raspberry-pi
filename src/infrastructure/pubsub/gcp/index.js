import { resolve as resolvePath } from 'path'
import { homedir } from 'os'

export const createGcpPubSub = ({
  pathToGcpCreds,
  gcpPubSub
}) => ({
    start: ({
        onMessage,
        subscriptionName = 'projects/smart-home-monitoring-system/subscriptions/main'
    }) => {
        console.log({ gcpPubSub })
        const pubsub = new gcpPubSub({ keyFilename: pathToGcpCreds })
        const subscription = pubsub.subscription(subscriptionName)
        subscription.on('message', message => {
            message.ack()
            onMessage(message.attributes)
        })
    }
})