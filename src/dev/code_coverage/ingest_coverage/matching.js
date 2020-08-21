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

import { parse } from 'path';
import { pipe, always, id } from './utils';
import { left, right } from './either';

const split = (sep) => (x) => x.split(sep);
const splitF = split('/');
const dropBlanks = (x) => x !== '';
const filterBlanks = (xs) => xs.filter(dropBlanks);
const splitAndDropBlanks = pipe(splitF, filterBlanks);
const pathize = (acc, x) => `${acc}/${x}`;
const pathizeTwo = (x) => {
  const [a, b] = splitAndDropBlanks(x);
  return [a, b].reduce(pathize, '');
};
const pluck = (x) => (obj) => obj[x];
const regex = (reg) => (x) => new RegExp(`(${x}${reg}`, 'g');
const capture = regex('.+) {1}(.+)');
const possiblesByLoop = (re) => (assignments) => {
  const res = [];
  let myArray;
  while ((myArray = re.exec(assignments)) !== null) res.push(myArray[0]);

  return res;
};
const index = (i) => (xs) => xs[i];
const buildRe = (x) => [x].map(pathizeTwo).map(capture)[0];
// const parts = (x) => [x].map(parse).map(pluck('dir')).map(splitAndDropBlanks)[0];
const parts = (x) => [x].map(parse).map(pluck('dir')).map(splitAndDropBlanks)[0];
const team = (xs) => xs.map(split(' ')).map(index(1))[0];
const captureAfterSpace = x => new RegExp(`${x} (.+)`);

export const exactMatch = coveredFilePath => assignments => {
  const testAssignments = test(assignments);

  const bits = parts(coveredFilePath);
  const dir = bits.length > 0
    ? right(bits)
    : left(null);

  return dir
    .map(xs => xs.reduce(pathize, ''))
    .map(captureAfterSpace)
    .map(testAssignments)
    .map(pluckTeam)
    .fold(always('unknown'), id);

};
function pluckTeam (arrayLike) {
  return arrayLike[1];
}
function test (str) {
  return (re) => str.match(re);
}

export const rootMatch = (rootCount) => (assignments) => (path) => {
  const queryRe = buildRe(path);
  const queryParts = parts(path);
  const maybes = possiblesByLoop(queryRe)(assignments);
  const includesRootParts = (x) => x.includes(queryParts[rootCount]);

  const name = maybes.length === 1
    ? team(maybes)
    : team(maybes.filter(includesRootParts));

  return name
    ? name
    : 'unknown';
};

const unGlob = x => x.replace(/\*/g, '');
const isDirGlob = x => /\*(?!\*)/.test(x);
const isSubDirGlob = x => /\*{2}/.test(x);
const dropSubDirGlob = x => !x.includes('**');
const rootsCount = x => parts(x).length
export const globMatch = assignments => path => {

  const count = rootsCount(path)//?
  // const noSub = isSubDirGlob(path) ? right(path) : left(null);
  // noSub
  //   .map(parts)
  //   .map(x => x.filter(dropSubDirGlob))//?

  const noglobPath = unGlob(path);//?
  const noGlobList = unGlob(assignments);

  let res;//?

  if (count ===1) {
    res = rootMatch(2)(noGlobList)(noglobPath)//?
  }

  if (count > 1) {
    res = rootMatch(3)(noGlobList)(noglobPath)//?
  }

  return res//?
};

export const isGlob = x =>
  /\\(.)|(^!|\*|[\].+)]\?|\[[^\\\]]+\]|\{[^\\}]+\}|\(\?[:!=][^\\)]+\)|\([^|]+\|[^\\)]+\))/
    .test(x);
