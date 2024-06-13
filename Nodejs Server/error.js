import { Code } from '@connectrpc/connect'

const FATAL_ERRORS = [Code.Unauthenticated, Code.InvalidArgument, Code.Internal]

const isAppErrorRetryable = e => {
    if (e.message === "COULD_NOT_READ_CURSOR" || e.message === "COULD_NOT_COMMIT_CURSOR") {
        return false
    }
    
    return true
}

const isTransportErrorRetryable = e => {
    if (FATAL_ERRORS.includes(e.code)) {
        return false
    }

    return true
}

export const isErrorRetryable = (e) => {
    if (e.constructor.name === 'ConnectError') {    
        return isTransportErrorRetryable(e)
    }

    if (e instanceof Error) {
        return isAppErrorRetryable(e)
    }

    return false
}
