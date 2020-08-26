/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { readdirSync, statSync } from 'fs';
import { resolve, join } from 'path';

const ROOT = resolve(__dirname, '../../../../..');
const joinRoot = join.bind(null, ROOT);

export const enumeratePatterns = (patternsMap) => {
  // TODO: Lookup every path in the patterns list

  const roots = ['src', 'packages', 'x-pack'];
  const rootPaths = roots.map(x => joinRoot(x));
  return rootPaths.map(x => creepFsSync(x));
};

function creepFsSync (dir, xs) {
  xs = xs || [];
  const files = readdirSync(dir);

  files.forEach(file => {
    const joined = join(dir, file);

    if (statSync(joined).isDirectory() && !isBlackListedDir(joined)) {
      xs = creepFsSync(joined, xs);
    } else {
      if (isWhiteListedFile(joined))
        xs.push(joined);
    }

  });

  return xs;
};

function isWhiteListedFile (x) {
  const isJsOrTsOrTsxOrJsx = /.(j|t)(s|sx)$/gm;
  return isJsOrTsOrTsxOrJsx.test(x);
}
function isBlackListedDir (x) {
  return /node_modules|target|__tests__|__fixture__|__fixtures__|build/gm.test(x)
}
