import { PubSub } from '@google-cloud/pubsub'
import { resolve as resolvePath } from 'path'
import { homedir } from 'os'
import { createGcpPubSub } from './gcp'

const gcpCreds = 'gcp-service-account.json'
const pathToGcpCreds = resolvePath(homedir(), 'gcp-creds', gcpCreds)
console.log({ PubSub })

export const gcpPubSub = createGcpPubSub({
    pathToGcpCreds: pathToGcpCreds,
    gcpPubSub: PubSub
})