// +-------------------------------------------------------------------------
// | Copyright (C) 2016 Yunify, Inc.
// +-------------------------------------------------------------------------
// | Licensed under the Apache License, Version 2.0 (the "License");
// | you may not use this work except in compliance with the License.
// | You may obtain a copy of the License in the LICENSE file, or at:
// |
// | http://www.apache.org/licenses/LICENSE-2.0
// |
// | Unless required by applicable law or agreed to in writing, software
// | distributed under the License is distributed on an "AS IS" BASIS,
// | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// | See the License for the specific language governing permissions and
// | limitations under the License.
// +-------------------------------------------------------------------------

'use strict';

import { stringify } from 'querystring';

// To be more stringent in adhering to RFC 3986 (which reserves !, ', (, ), and *),
// even though these characters have no formalized URI delimiting uses
export function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

export function buildUri(endpoint, path, params) {
  const separator = path.includes('?') ? '&' : '?';

  return `${endpoint}${path}${separator}${stringify(params)}`;
}

export function isFunction(fn) {
  return (typeof fn !== 'undefined' ? Object.prototype.toString.call(fn) : 0) === '[object Function]';
}

const UNSAFA_HEADERS = ['host', 'content-length', 'user-agent'];
export function filterUnsafeHeaders(headers) {
  if (typeof window === 'undefined') {
    return headers;
  }

  return Object.keys(headers).reduce((safeHeaders, key) => {
    if (UNSAFA_HEADERS.indexOf(key) === -1) {
      safeHeaders[key] = headers[key];
    }

    return safeHeaders;
  }, {});
}
