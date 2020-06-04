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

import { i18n } from '@kbn/i18n';
import { Assign } from '@kbn/utility-types';
import { ExpressionFunctionDefinition } from '../../../../../expressions/public';
import { AggExpressionType, AggExpressionFunctionArgs, BUCKET_TYPES } from '../';
import { getParsedValue } from '../utils/get_parsed_value';

const fnName = 'aggTerms';

type Input = any;
type AggArgs = AggExpressionFunctionArgs<typeof BUCKET_TYPES.TERMS>;

// Since the orderAgg param is an agg nested in a subexpression, we need to
// overwrite the param type to expect a value of type AggExpressionType.
type Arguments = Assign<AggArgs, { orderAgg?: AggExpressionType }>;

type Output = AggExpressionType;
type FunctionDefinition = ExpressionFunctionDefinition<typeof fnName, Input, Arguments, Output>;

export const aggTerms = (): FunctionDefinition => ({
  name: fnName,
  help: i18n.translate('data.search.aggs.function.buckets.terms.help', {
    defaultMessage: 'Generates a serialized agg config for a Terms agg',
  }),
  type: 'agg_type',
  args: {
    id: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.id.help', {
        defaultMessage: 'ID for this aggregation',
      }),
    },
    enabled: {
      types: ['boolean'],
      default: true,
      help: i18n.translate('data.search.aggs.buckets.terms.enabled.help', {
        defaultMessage: 'Specifies whether this aggregation should be enabled',
      }),
    },
    schema: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.schema.help', {
        defaultMessage: 'Schema to use for this aggregation',
      }),
    },
    field: {
      types: ['string'],
      required: true,
      help: i18n.translate('data.search.aggs.buckets.terms.field.help', {
        defaultMessage: 'Field to use for this aggregation',
      }),
    },
    order: {
      types: ['string'],
      options: ['asc', 'desc'],
      help: i18n.translate('data.search.aggs.buckets.terms.order.help', {
        defaultMessage: 'Order in which to return the results: asc or desc',
      }),
    },
    orderBy: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.orderBy.help', {
        defaultMessage: 'Field to order results by',
      }),
    },
    orderAgg: {
      types: ['agg_type'],
      help: i18n.translate('data.search.aggs.buckets.terms.orderAgg.help', {
        defaultMessage: 'Agg config to use for ordering results',
      }),
    },
    size: {
      types: ['number'],
      help: i18n.translate('data.search.aggs.buckets.terms.size.help', {
        defaultMessage: 'Max number of buckets to retrieve',
      }),
    },
    missingBucket: {
      types: ['boolean'],
      help: i18n.translate('data.search.aggs.buckets.terms.missingBucket.help', {
        defaultMessage: 'When set to true, groups together any buckets with missing fields',
      }),
    },
    missingBucketLabel: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.missingBucketLabel.help', {
        defaultMessage: 'Default label used in charts when documents are missing a field.',
      }),
    },
    otherBucket: {
      types: ['boolean'],
      help: i18n.translate('data.search.aggs.buckets.terms.otherBucket.help', {
        defaultMessage: 'When set to true, groups together any buckets beyond the allowed size',
      }),
    },
    otherBucketLabel: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.otherBucketLabel.help', {
        defaultMessage: 'Default label used in charts for documents in the Other bucket',
      }),
    },
    exclude: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.exclude.help', {
        defaultMessage: 'Specific bucket values to exclude from results',
      }),
    },
    include: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.include.help', {
        defaultMessage: 'Specific bucket values to include in results',
      }),
    },
    json: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.json.help', {
        defaultMessage: 'Advanced json to include when the agg is sent to Elasticsearch',
      }),
    },
    customLabel: {
      types: ['string'],
      help: i18n.translate('data.search.aggs.buckets.terms.customLabel.help', {
        defaultMessage: 'Represents a custom label for this aggregation',
      }),
    },
  },
  fn: (input, args) => {
    const { id, enabled, schema, ...rest } = args;

    return {
      type: 'agg_type',
      value: {
        id,
        enabled,
        schema,
        type: BUCKET_TYPES.TERMS,
        params: {
          ...rest,
          orderAgg: args.orderAgg?.value,
          json: getParsedValue(args, 'json'),
        },
      },
    };
  },
});