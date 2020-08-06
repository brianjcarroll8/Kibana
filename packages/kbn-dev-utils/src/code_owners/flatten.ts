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

import { teamName } from './helpers';
import { of, from } from 'rxjs';
import { concatMap, delay, map, takeUntil } from 'rxjs/operators';

import { createWriteStream, WriteStream } from 'fs';

export const flatten = (sourceOfTruth: []) => {
  const owners = new Map();

  for (const { githubHandle, pathPatterns } of sourceOfTruth) {
    const handle = `@${githubHandle}`;
    const team = teamName(githubHandle);

    for (const path of pathPatterns as []) {
      const existing = owners.get(path);

      const ownersSet = new Set(existing ? [...existing.owners, handle] : [handle]);
      const teamsSet = new Set(existing ? [...existing.teams, team] : [team]);

      owners.set(path, {
        owners: [...ownersSet],
        teams: [...teamsSet],
      });
    }
  }

  console.log(`\n### owners: \n\t${owners}`);

  const file: WriteStream = createWriteStream('./flattened.txt');
  const recordToFile = record(file);
  from(owners)
  .pipe(map(arrayize))
  .subscribe(
    recordToFile,
    console.error,
    () => file.end(),
  )

};

function arrayize ([path, { owners, teams }]) {
  return [path, [...owners], [...teams]];
}


function record (file) {
  return xs => {
    file.write(`'${xs[0]}', [${xs[1]}], [${xs[2]}]\n`, 'utf8');
  }
}
