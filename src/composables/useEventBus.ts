import mitt from 'mitt'

type ApplicationEvents = {
  hamburgerToggle: boolean
  headerLogoClick: boolean
}

const emitter = mitt<ApplicationEvents>()

export const useEvent = emitter.emit
export const useListen = emitter.on
