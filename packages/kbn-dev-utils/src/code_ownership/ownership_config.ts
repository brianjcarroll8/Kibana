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

export interface OwnershipRule {
  files: string[]; // Files listed in CODEOWNERS and Code Coverage
  excludeFiles: string[]; // Files in CODEOWNERS, with a ! prepended
  codeOwner?: string; // CODEOWNERS Team Name
  coverageOwner?: string; // Code Coverage Team Name
}

export const rules: OwnershipRule[] = [
  {
    files: [
      'x-pack/plugins/dashboard_enhanced',
      'x-pack/plugins/discover_enhanced',
      'x-pack/plugins/lens',
      'x-pack/plugins/graph',
      'src/plugins/dashboard',
      'src/plugins/discover',
      'src/plugins/input_control_vis',
      'src/plugins/kibana_legacy',
      'src/plugins/vis_default_editor',
      'src/plugins/vis_type_markdown',
      'src/plugins/vis_type_metric',
      'src/plugins/vis_type_table',
      'src/plugins/vis_type_tagcloud',
      'src/plugins/vis_type_timelion',
      'src/plugins/vis_type_timeseries',
      'src/plugins/vis_type_vega',
      'src/plugins/vis_type_vislib',
      'src/plugins/vis_type_xy',
      'src/plugins/visualize',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-app',
    coverageOwner: 'kibana-app',
  },
  {
    files: [
      'src/legacy/core_plugins/kibana/public/local_application_service',
      'src/plugins/vis_type',
      'src/legacy/core_plugins/kibana',
      'src/legacy/core_plugins/kibana/common/utils',
      'src/legacy/core_plugins/kibana/migrations',
      'src/legacy/core_plugins/kibana/public',
      'src/legacy/core_plugins/kibana/public/dashboard',
      'src/legacy/core_plugins/kibana/public/dev_tools',
      'src/legacy/core_plugins/kibana/public/discover',
      'src/legacy/core_plugins/kibana/public/local_application_service',
      'src/legacy/core_plugins/console_legacy',
      'src/legacy/core_plugins/input_control_vis',
      'src/legacy/core_plugins/timelion',
      'src/legacy/core_plugins/vis_type_tagcloud',
      'src/legacy/core_plugins/vis_type_vega',
      'src/legacy/core_plugins/vis_type_vislib',
      'src/legacy/server/sample_data',
      'src/legacy/server/url_shortening',
      'src/legacy/ui/public/state_management',
      'src/plugins/charts/public/static/color_maps',
      'src/plugins/index_pattern_management/public',
      'src/plugins/input_control_vis',
      'src/plugins/kibana_legacy',
      'src/plugins/timelion',
      'x-pack/legacy/plugins/dashboard_mode',
      'x-pack/plugins/dashboard_mode',
      'x-pack/plugins/lens',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-app',
  },
  {
    files: [
      'examples/bfetch_explorer',
      'examples/dashboard_embeddable_examples',
      'examples/demo_search',
      'examples/developer_examples',
      'examples/embeddable_examples',
      'examples/embeddable_explorer',
      'examples/state_container_examples',
      'examples/ui_actions_examples',
      'examples/ui_actions_explorer',
      'examples/url_generators_examples',
      'examples/url_generators_explorer',
      'packages/elastic-datemath',
      'packages/kbn-interpreter',
      'src/plugins/advanced_settings',
      'src/plugins/bfetch',
      'src/plugins/data',
      'src/plugins/embeddable',
      'src/plugins/expressions',
      'src/plugins/inspector',
      'src/plugins/kibana_react',
      'src/plugins/kibana_utils',
      'src/plugins/management',
      'src/plugins/navigation',
      'src/plugins/share',
      'src/plugins/ui_actions',
      'src/plugins/visualizations',
      'x-pack/examples/ui_actions_enhanced_examples',
      'x-pack/plugins/data_enhanced',
      'x-pack/plugins/embeddable_enhanced',
      'x-pack/plugins/ui_actions_enhanced',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-app-arch',
    coverageOwner: 'kibana-app-arch',
  },
  {
    files: [
      'src/legacy/core_plugins/kibana/public/management',
      'src/legacy/core_plugins/kibana/server/routes/api/management',
      'src/legacy/core_plugins/embeddable_api',
      'src/legacy/core_plugins/interpreter',
      'src/legacy/core_plugins/kibana_react',
      'src/legacy/core_plugins/status_page/public',
      'src/legacy/server/index_patterns',
      'src/legacy/ui/public/field_editor',
      'src/legacy/ui/public/management',
      'src/plugins/advanced_settings',
      'src/plugins/bfetch',
      'src/plugins/charts',
      'src/plugins/index_pattern_management/public/service',
      'src/plugins/inspector',
      'src/plugins/saved_objects',
      'src/plugins/share',
      'src/plugins/vis_default_editor',
      'x-pack/plugins/advanced_ui_actions',
      'x-pack/plugins/drilldowns',
      'packages/kbn-interpreter',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-app-arch',
  },
  {
    files: [
      'x-pack/plugins/apm',
      'x-pack/test/functional/apps/apm',
      'src/legacy/core_plugins/apm_oss',
      'src/plugins/apm_oss',
      'src/apm.js',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/apm-ui',
    coverageOwner: 'apm-ui',
  },
  {
    files: [
      'src/plugins/apm_oss',
      'src/legacy/core_plugins/apm_oss',
      'src/legacy/ui/public/apm',
      'x-pack/legacy/plugins/apm',
      'x-pack/plugins/observability',
    ],
    excludeFiles: [],
    coverageOwner: 'apm-ui',
  },
  {
    files: ['src/apm.js'],
    excludeFiles: [],
    codeOwner: '@watson',
    coverageOwner: 'watson',
  },
  {
    files: ['src/apm.js'],
    excludeFiles: [],
    codeOwner: '@vigneshshanmugam',
    coverageOwner: 'vigneshshanmugam',
  },
  {
    files: ['x-pack/legacy/plugins/beats_management/'],
    excludeFiles: [],
    codeOwner: '@elastic/beats',
    coverageOwner: 'beats',
  },
  {
    files: ['x-pack/plugins/beats_management/'],
    excludeFiles: [],
    coverageOwner: 'beats',
  },
  {
    files: ['x-pack/plugins/canvas/', 'x-pack/test/functional/apps/canvas/'],
    excludeFiles: [],
    codeOwner: '@elastic/canvas',
    coverageOwner: 'canvas',
  },
  {
    files: ['src/plugins/kibana_react/public/code_editor/', 'x-pack/legacy/plugins/canvas/'],
    excludeFiles: [],
    coverageOwner: 'canvas',
  },
  {
    files: [
      'src/plugins/home/public',
      'src/plugins/home/server/*.ts',
      'src/plugins/home/server/services',
      'src/legacy/core_plugins/kibana/public/home/*.ts',
      'src/legacy/core_plugins/kibana/public/home/*.scss',
      'src/legacy/core_plugins/kibana/public/home/np_ready',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-core-ui',
    coverageOwner: 'kibana-core-ui',
  },
  {
    files: [
      'src/legacy/core_plugins/newsfeed',
      'src/plugins/newsfeed',
      'src/plugins/home/public',
      'src/plugins/home/server/services',
      'src/plugins/home',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-core-ui',
  },
  {
    files: ['x-pack/legacy/plugins/infra/', 'x-pack/plugins/infra/'],
    excludeFiles: [],
    codeOwner: '@elastic/logs-metrics-ui',
    coverageOwner: 'logs-metrics-ui',
  },
  {
    files: ['x-pack/legacy/plugins/ingest_manager/', 'x-pack/plugins/ingest_manager/'],
    excludeFiles: [],
    codeOwner: '@elastic/ingest-management',
    coverageOwner: 'ingest-management',
  },
  {
    files: ['x-pack/plugins/uptime'],
    excludeFiles: [],
    codeOwner: '@elastic/uptime',
    coverageOwner: 'uptime',
  },
  {
    files: ['x-pack/legacy/plugins/uptime'],
    excludeFiles: [],
    coverageOwner: 'uptime',
  },
  {
    files: ['x-pack/legacy/plugins/monitoring/', 'x-pack/plugins/monitoring'],
    excludeFiles: [],
    codeOwner: '@elastic/stack-monitoring-ui',
    coverageOwner: 'stack-monitoring-ui',
  },
  {
    files: ['x-pack/plugins/observability/'],
    excludeFiles: [],
    codeOwner: '@elastic/observability-ui',
    coverageOwner: 'observability-ui',
  },
  {
    files: [
      'x-pack/legacy/plugins/ml',
      'x-pack/plugins/ml',
      'x-pack/test/functional/apps/machine_learning',
      'x-pack/test/functional/services/machine_learning',
      'x-pack/test/functional/services/ml.ts',
      'x-pack/plugins/transform',
      'x-pack/test/functional/apps/transform',
      'x-pack/test/functional/services/transform_ui',
      'x-pack/test/functional/services/transform.ts',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/ml-ui',
    coverageOwner: 'ml-ui',
  },
  {
    files: [
      'x-pack/legacy/plugins/maps',
      'x-pack/plugins/maps',
      'x-pack/test/api_integration/apis/maps',
      'x-pack/test/functional/apps/maps',
      'x-pack/test/functional/es_archives/maps',
      'x-pack/test/visual_regression/tests/maps/index.js',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-gis',
    coverageOwner: 'kibana-gis',
  },
  {
    files: [
      'src/legacy/core_plugins/region_map',
      'src/legacy/core_plugins/tile_map',
      'src/plugins/maps_legacy',
      'x-pack/plugins/file_upload',
      'x-pack/plugins/maps_legacy_licensing',
      'src/plugins/home/server/tutorials',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-gis',
  },
  {
    files: [
      'src/dev',
      'src/setup_node_env',
      'src/optimize',
      'packages/*eslint*',
      'packages/*babel*',
      'packages/kbn-dev-utils*',
      'packages/kbn-es',
      'packages/kbn-optimizer',
      'packages/kbn-pm',
      'packages/kbn-test',
      'packages/kbn-ui-shared-deps',
      'packages/kbn-es-archiver',
      'src/legacy/server/keystore',
      'src/legacy/server/pid',
      'src/legacy/server/sass',
      'src/legacy/server/utils',
      'src/legacy/server/warnings',
      '.ci/es-snapshots',
      'vars',
    ],
    excludeFiles: [
      'vars/kibanaCoverage.groovy',
      'vars/kibanaTeamAssign.groovy',
      'src/dev/code_coverage/'
    ],
    codeOwner: '@elastic/kibana-operations',
    coverageOwner: 'kibana-operations',
  },
  {
    files: [
      'src/legacy/server/pid',
      'src/legacy/server/utils',
      'packages/kbn-babel',
      'packages/kbn-eslint',
      'packages/kbn-expect',
      'packages/kbn-pm',
      'packages/kbn-test-subj-selector',
      'src/test_utils',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-operations',
  },
  {
    files: [
      'src/dev/code_coverage',
      'test/functional/services/common',
      'test/functional/services/lib',
      'test/functional/services/remote',
      'vars/kibanaCoverage.groovy',
      'vars/kibanaTeamAssign.groovy',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-qa',
    coverageOwner: 'kibana-qa',
  },
  {
    files: [
      'src/core',
      'config/kibana.yml',
      'x-pack/plugins/features',
      'x-pack/plugins/licensing',
      'x-pack/plugins/global_search',
      'x-pack/plugins/cloud',
      'x-pack/test/saved_objects_field_count',
      'packages/kbn-config-schema',
      'src/legacy/server/config',
      'src/legacy/server/http',
      'src/legacy/server/logging',
      'src/legacy/server/saved_objects/ ',
      'src/legacy/server/status',
      'src/plugins/status_page',
      'src/plugins/saved_objects_management',
      'src/dev/run_check_published_api_changes.ts',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-platform',
    coverageOwner: 'kibana-platform',
  },
  {
    files: [
      'src/core/server/csp',
      'src/legacy/core_plugins/kibana/server/lib',
      'src/legacy/core_plugins/kibana/server/lib/management/saved_objects',
      'src/legacy/core_plugins/kibana/server/routes/api/import',
      'src/legacy/core_plugins/kibana/server/routes/api/export',
      'src/legacy/core_plugins/elasticsearch',
      'src/legacy/core_plugins/testbed',
      'src/legacy/server/config',
      'src/legacy/server/http',
      'src/legacy/server/status',
      'src/legacy/ui/public/new_platform',
      'src/legacy/ui/public/plugin_discovery',
      'src/legacy/ui/public/chrome',
      'src/legacy/ui/public/notify',
      'src/legacy/ui/public/documentation_links',
      'src/legacy/ui/public/autoload',
      'src/plugins/legacy_export',
      'src/plugins/status_page',
      'src/plugins/testbed/server',
      'x-pack/legacy/plugins/xpack_main/server',
      'x-pack/legacy/server/lib',
      'x-pack/plugins/cloud',
      'x-pack/plugins/features',
      'x-pack/plugins/global_search',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-platform',
  },
  {
    files: [
      'src/core/server/csp',
      'x-pack/legacy/plugins/security',
      'x-pack/legacy/plugins/spaces',
      'x-pack/plugins/spaces',
      'x-pack/plugins/encrypted_saved_objects',
      'x-pack/plugins/security',
      'x-pack/test/api_integration/apis/security',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-security',
    coverageOwner: 'kibana-security',
  },
  {
    files: [
      'src/legacy/ui/public/capabilities',
      'x-pack/legacy/plugins/encrypted_saved_objects',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-security',
  },
  {
    files: [
      'src/dev/i18n',
      'src/legacy/server/i18n',
      'src/core/public/i18n',
      'packages/kbn-i18n',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-localization',
    coverageOwner: 'kibana-localization',
  },
  {
    files: ['src/legacy/server/i18n/', 'x-pack/plugins/translations/'],
    excludeFiles: [],
    coverageOwner: 'kibana-localization',
  },
  {
    files: [
      'packages/kbn-analytics',
      'packages/kbn-telemetry-tools',
      'src/plugins/kibana_usage_collection',
      'src/plugins/newsfeed',
      'src/plugins/telemetry',
      'src/plugins/telemetry_collection_manager',
      'src/plugins/telemetry_management_section',
      'src/plugins/usage_collection',
      'x-pack/plugins/telemetry_collection_xpack',
      '.telemetryrc.json',
      'x-pack/.telemetryrc.json',
      'src/plugins/telemetry/schema/legacy_oss_plugins.json',
      'src/plugins/telemetry/schema/oss_plugins.json',
      'x-pack/plugins/telemetry_collection_xpack/schema/xpack_plugins.json',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-telemetry',
    coverageOwner: 'kibana-telemetry',
  },
  {
    files: [
      'x-pack/plugins/alerts',
      'x-pack/plugins/actions',
      'x-pack/plugins/event_log',
      'x-pack/plugins/task_manager',
      'x-pack/test/alerting_api_integration',
      'x-pack/test/plugin_api_integration/plugins/task_manager',
      'x-pack/test/plugin_api_integration/test_suites/task_manager',
      'x-pack/plugins/triggers_actions_ui',
      'x-pack/test/functional_with_es_ssl/apps/triggers_actions_ui',
      'x-pack/test/functional_with_es_ssl/fixtures/plugins/alerts',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-alerting-services',
    coverageOwner: 'kibana-alerting-services',
  },
  {
    files: [
      'x-pack/legacy/plugins/actions',
      'x-pack/legacy/plugins/alerting',
      'x-pack/legacy/plugins/task_manager',
      'x-pack/legacy/plugins/triggers_actions_ui',
      'x-pack/plugins/alerting_builtins',
    ],
    excludeFiles: [],
    coverageOwner: 'kibana-alerting-services',
  },
  {
    files: ['**/*.scss'],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-design',
    coverageOwner: 'kibana-design',
  },
  {
    files: ['packages/kbn-ui-framework/'],
    excludeFiles: [],
    coverageOwner: 'kibana-design',
  },
  {
    files: ['x-pack/legacy/plugins/reporting', 'x-pack/plugins/reporting'],
    excludeFiles: [],
    codeOwner: '@elastic/kibana-reporting',
    coverageOwner: 'kibana-reporting',
  },
  {
    files: ['x-pack/plugins/code/'],
    excludeFiles: [],
    codeOwner: '@elastic/code',
    coverageOwner: 'code',
  },
  {
    files: ['x-pack/plugins/logstash'],
    excludeFiles: [],
    codeOwner: '@elastic/logstash',
    coverageOwner: 'logstash',
  },
  {
    files: [
      'src/legacy/core_plugins/ui_metric',
      'src/plugins/kibana_usage_collection',
      'src/plugins/telemetry',
      'src/plugins/usage_collection',
      'x-pack/plugins/oss_telemetry',
      'x-pack/plugins/telemetry_collection_xpack',
      'packages/kbn-analytics',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/pulse',
    coverageOwner: 'pulse',
  },
  {
    files: ['x-pack/plugins/enterprise_search/', 'x-pack/test/functional_enterprise_search/'],
    excludeFiles: [],
    codeOwner: '@elastic/app-search-frontend',
    coverageOwner: 'app-search-frontend',
  },
  {
    files: ['x-pack/plugins/enterprise_search/', 'x-pack/test/functional_enterprise_search/'],
    excludeFiles: [],
    codeOwner: '@elastic/workplace-search-frontend',
    coverageOwner: 'workplace-search-frontend',
  },
  {
    files: ['x-pack/plugins/enterprise_search/**/*.scss'],
    excludeFiles: [],
    codeOwner: '@elastic/ent-search-design',
    coverageOwner: 'ent-search-design',
  },
  {
    files: [
      'src/plugins/dev_tools',
      'src/plugins/console',
      'src/plugins/es_ui_shared',
      'x-pack/legacy/plugins/cross_cluster_replication',
      'x-pack/plugins/index_lifecycle_management',
      'x-pack/legacy/plugins/index_management',
      'x-pack/legacy/plugins/license_management',
      'x-pack/legacy/plugins/rollup',
      'x-pack/legacy/plugins/snapshot_restore',
      'x-pack/legacy/plugins/upgrade_assistant',
      'x-pack/plugins/console_extensions',
      'x-pack/plugins/es_ui_shared',
      'x-pack/plugins/grokdebugger',
      'x-pack/plugins/index_management',
      'x-pack/plugins/license_management',
      'x-pack/plugins/painless_lab',
      'x-pack/plugins/remote_clusters',
      'x-pack/plugins/rollup',
      'x-pack/plugins/searchprofiler',
      'x-pack/plugins/snapshot_restore',
      'x-pack/plugins/upgrade_assistant',
      'x-pack/plugins/watcher',
      'x-pack/plugins/ingest_pipelines',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/es-ui',
    coverageOwner: 'es-ui',
  },
  {
    files: [
      'x-pack/legacy/plugins/rollup',
      'x-pack/legacy/server/lib/create_router',
      'x-pack/legacy/server/lib/check_license',
      'x-pack/plugins/console_extensions',
      'x-pack/plugins/cross_cluster_replication',
      'x-pack/plugins/es_ui_shared',
    ],
    excludeFiles: [],
    coverageOwner: 'es-ui',
  },
  {
    files: [
      'x-pack/plugins/endpoint',
      'x-pack/test/api_integration/apis/endpoint',
      'x-pack/test/endpoint_api_integration_no_ingest',
      'x-pack/test/security_solution_endpoint',
      'x-pack/test/functional/es_archives/endpoint',
      'x-pack/test/plugin_functional/plugins/resolver_test',
      'x-pack/test/plugin_functional/test_suites/resolver',
      'x-pack/plugins/security_solution',
      'x-pack/test/detection_engine_api_integration',
      'x-pack/test/api_integration/apis/security_solution',
      'x-pack/plugins/case',
      'x-pack/plugins/lists',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/endpoint-app-team',
    coverageOwner: 'endpoint-app-team',
  },
  {
    files: [
      'x-pack/plugins/endpoint',
      'x-pack/test/api_integration/apis/endpoint',
      'x-pack/test/endpoint_api_integration_no_ingest',
      'x-pack/test/security_solution_endpoint',
      'x-pack/test/functional/es_archives/endpoint',
      'x-pack/test/plugin_functional/plugins/resolver_test',
      'x-pack/test/plugin_functional/test_suites/resolver',
      'x-pack/plugins/security_solution',
      'x-pack/test/detection_engine_api_integration',
      'x-pack/test/api_integration/apis/security_solution',
      'x-pack/plugins/case',
      'x-pack/plugins/lists',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/siem',
    coverageOwner: 'siem',
  },
  {
    files: [
      'x-pack/legacy/plugins/siem',
      'x-pack/plugins/siem',
      'x-pack/plugins/security_solution',
    ],
    excludeFiles: [],
    coverageOwner: 'siem',
  },
  {
    files: [
      'x-pack/plugins/security_solution/server/lib/detection_engine/rules/prepackaged_rules',
    ],
    excludeFiles: [],
    codeOwner: '@elastic/security-intelligence-analytics',
    coverageOwner: 'security-intelligence-analytics',
  },
];
