'use strict';

import rest from 'rest';
import mime from 'rest/interceptor/mime';
import errorCode from 'rest/interceptor/errorCode';
import baseRegistry from 'rest/mime/registry';

var registry = baseRegistry.child();

export default rest
		.wrap(mime, { registry: registry, mime: 'application/json'})
		.wrap(errorCode)
