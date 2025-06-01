import {
  createStartHandler,
  defaultStreamHandler
  
} from '@tanstack/react-start/server'
import { getRouterManifest } from '@tanstack/react-start/router-manifest'
import { createRouter  } from './router'
import type {HandlerCallback} from '@tanstack/react-start/server';
import type {TSRouter} from './router';

const startHandlerFactory =  createStartHandler({createRouter, getRouterManifest})

const handler = startHandlerFactory(defaultStreamHandler as HandlerCallback<TSRouter>)

export default handler