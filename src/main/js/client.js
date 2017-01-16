'use strict';

import rest from 'rest'
import mime from 'rest/interceptor/mime'
import uriTemplateInterceptor from './api/uriTemplateInterceptor'
import errorCode from 'rest/interceptor/errorCode'
import baseRegistry from 'rest/mime/registry'

var registry = baseRegistry.child();

module.exports = rest
		.wrap(mime, { registry: registry })
		.wrap(uriTemplateInterceptor)
		.wrap(errorCode)
