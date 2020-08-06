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

import { PathLike } from 'fs';
import { createWriteStream, WriteStream } from 'fs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';




export const createConfig = (path: PathLike) => (sot: []) => {
  const file: WriteStream = createWriteStream(path);
  const recordToFile = record(file);

  from(sot)
  .pipe(map(convert))
    .subscribe(recordToFile, x => console.error(x), () => file.end())
};

function record (file) {
  return x => {
    const out = JSON.stringify(x, null, 2)
    file.write(`${out},\n`, 'utf8');
  }
}

function convert (x) {
  const {pathPatterns, githubHandle } = x


  const res = {
    coverageTeam: githubHandle.replace('elastic/', ''),
    approvers: [`@${githubHandle}`],
    files: [...pathPatterns]
  };

  return res;
}
