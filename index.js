import { Nuxt, Builder } from 'nuxt'

import ExpressService from 'manablox-service-express'
import serverConfig from '~~/config/server'
import clientConfig from '~~/config/client'

const app = new ExpressService(serverConfig)

const devmode = !(process.env.NODE_ENV == 'production')
clientConfig.dev = devmode

const nuxt = new Nuxt(clientConfig)

const RunApp = async () => {
    if(clientConfig.dev){
        const builder = new Builder(nuxt)
        await builder.build()
    }

    app.Use(nuxt.render)
    
    app.Start()
}

RunApp()
