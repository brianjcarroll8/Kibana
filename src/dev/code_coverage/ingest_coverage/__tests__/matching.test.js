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

import expect from '@kbn/expect';
import { exactMatch, rootMatch, isGlob, globMatch } from '../matching';

describe(`Matching fns`, () => {
  describe(`isGlob`, () => {
    it(`should find a file glob`, () => {
      expect(isGlob('/a/b/*.js')).to.be(true)
    });
    it(`should find a dir glob`, () => {
      expect(isGlob('/a/b/*eslint*')).to.be(true)
    });
    it(`should find a subdir file glob`, () => {
      expect(isGlob('/a/b/**/*.js')).to.be(true)
    });
  });
  describe(`rootMatch`, () => {
    const rootMatch2 = rootMatch(2)(assignments());
    it(`should be reporting`, () => {
      const actual = rootMatch2('x-pack/plugins/reporting/server/browsers/extract/unzip.js');
      expect(actual).to.be('kibana-reporting');
    });
    it(`should be es-ui`, () => {
      const actual = rootMatch2(
        'src/plugins/console/public/application/models/legacy_core_editor/legacy_core_editor.test.mocks.ts'
      );
      expect(actual).to.be('es-ui');
    });
    it(`should be kibana-design`, () => {
      const actual = rootMatch2(
        'packages/kbn-ui-framework/src/components/form/text_area/text_area.js'
      );
      expect(actual).to.be('kibana-design');
    });
    it(`should be kibana-platform`, () => {
      const actual = rootMatch2(
        'src/plugins/saved_objects_management/public/lib/import_legacy_file.ts'
      );
      expect(actual).to.be('kibana-platform');
    });
    it(`should be ent-search-design`, () => {
      const path = '/x-pack/plugins/enterprise_search/blah/a.scss'
      const actual = rootMatch(2)(assignments())(path)
      expect(actual).to.be('ent-search-design')
    })

  });
  describe(`exactMatch`, () => {
    it(`should be kibana-platform`, () => {
      const actual = exactMatch('src/legacy/core_plugins/elasticsearch/index.js')(assignments());
      expect(actual).to.be('kibana-platform');
    });
    it(`should be unknown`, () => {
      const actual = exactMatch('tre')(assignments());
      expect(actual).to.be('unknown');
    });
  });
  // describe.only(`globMatch`, () => {
  //   it(`should return kibana-operations`, () => {
  //     const path = '/packages/*eslint*/'
  //     const actual = globMatch(assignments())(path)//?
  //     expect(actual).to.be('kibana-operations')
  //   });
  //   it(`should also return kibana-operations`, () => {
  //     const path = '/packages/*babel*/'
  //     const actual = globMatch(assignments())(path)//?
  //     expect(actual).to.be('kibana-operations')
  //   })
  //   it(`should return ent-search-design`, () => {
  //     const path = '/x-pack/plugins/enterprise_search/blah/a.scss'
  //     const actual = rootMatch(2)(assignments())(path)//?
  //     expect(actual).to.be('ent-search-design')
  //   })
  // });
});

function assignments() {
  return `/x-pack/plugins/dashboard_enhanced/ kibana-app
/x-pack/plugins/discover_enhanced/ kibana-app
/x-pack/plugins/lens/ kibana-app
/x-pack/plugins/graph/ kibana-app
/src/plugins/dashboard/ kibana-app
/src/plugins/discover/ kibana-app
/src/plugins/input_control_vis/ kibana-app
/src/plugins/kibana_legacy/ kibana-app
/src/plugins/vis_default_editor/ kibana-app
/src/plugins/vis_type_markdown/ kibana-app
/src/plugins/vis_type_metric/ kibana-app
/src/plugins/vis_type_table/ kibana-app
/src/plugins/vis_type_tagcloud/ kibana-app
/src/plugins/vis_type_timelion/ kibana-app
/src/plugins/vis_type_timeseries/ kibana-app
/src/plugins/vis_type_vega/ kibana-app
/src/plugins/vis_type_vislib/ kibana-app
/src/plugins/vis_type_xy/ kibana-app
/src/plugins/visualize/ kibana-app
/src/legacy/core_plugins/kibana/public/local_application_service/ kibana-app
/src/plugins/vis_type kibana-app
/src/legacy/core_plugins/kibana/ kibana-app
/src/legacy/core_plugins/kibana/common/utils kibana-app
/src/legacy/core_plugins/kibana/migrations kibana-app
/src/legacy/core_plugins/kibana/public kibana-app
/src/legacy/core_plugins/kibana/public/dashboard/ kibana-app
/src/legacy/core_plugins/kibana/public/dev_tools/ kibana-app
/src/legacy/core_plugins/kibana/public/discover/ kibana-app
/src/legacy/core_plugins/console_legacy kibana-app
/src/legacy/core_plugins/input_control_vis kibana-app
/src/legacy/core_plugins/timelion kibana-app
/src/legacy/core_plugins/vis_type_tagcloud kibana-app
/src/legacy/core_plugins/vis_type_vega kibana-app
/src/legacy/core_plugins/vis_type_vislib/ kibana-app
/src/legacy/server/sample_data/ kibana-app
/src/legacy/server/url_shortening/ kibana-app
/src/legacy/ui/public/state_management kibana-app
/src/plugins/charts/public/static/color_maps kibana-app
/src/plugins/index_pattern_management/public kibana-app
/src/plugins/timelion kibana-app
/x-pack/legacy/plugins/dashboard_mode/ kibana-app
/x-pack/plugins/dashboard_mode kibana-app
/examples/bfetch_explorer/ kibana-app-arch
/examples/dashboard_embeddable_examples/ kibana-app-arch
/examples/demo_search/ kibana-app-arch
/examples/developer_examples/ kibana-app-arch
/examples/embeddable_examples/ kibana-app-arch
/examples/embeddable_explorer/ kibana-app-arch
/examples/state_container_examples/ kibana-app-arch
/examples/ui_actions_examples/ kibana-app-arch
/examples/ui_actions_explorer/ kibana-app-arch
/examples/url_generators_examples/ kibana-app-arch
/examples/url_generators_explorer/ kibana-app-arch
/packages/elastic-datemath/ kibana-app-arch
/packages/kbn-interpreter/ kibana-app-arch
/src/plugins/advanced_settings/ kibana-app-arch
/src/plugins/bfetch/ kibana-app-arch
/src/plugins/data/ kibana-app-arch
/src/plugins/embeddable/ kibana-app-arch
/src/plugins/expressions/ kibana-app-arch
/src/plugins/inspector/ kibana-app-arch
/src/plugins/kibana_react/ kibana-app-arch
/src/plugins/kibana_utils/ kibana-app-arch
/src/plugins/management/ kibana-app-arch
/src/plugins/navigation/ kibana-app-arch
/src/plugins/share/ kibana-app-arch
/src/plugins/ui_actions/ kibana-app-arch
/src/plugins/visualizations/ kibana-app-arch
/x-pack/examples/ui_actions_enhanced_examples/ kibana-app-arch
/x-pack/plugins/data_enhanced/ kibana-app-arch
/x-pack/plugins/embeddable_enhanced/ kibana-app-arch
/x-pack/plugins/ui_actions_enhanced/ kibana-app-arch
/src/legacy/core_plugins/kibana/public/management/ kibana-app-arch
/src/legacy/core_plugins/kibana/server/routes/api/management/ kibana-app-arch
/src/legacy/core_plugins/embeddable_api/ kibana-app-arch
/src/legacy/core_plugins/interpreter/ kibana-app-arch
/src/legacy/core_plugins/kibana_react/ kibana-app-arch
/src/legacy/core_plugins/status_page/public kibana-app-arch
/src/legacy/server/index_patterns/ kibana-app-arch
/src/legacy/ui/public/field_editor kibana-app-arch
/src/legacy/ui/public/management kibana-app-arch
/src/plugins/charts/ kibana-app-arch
/src/plugins/index_pattern_management/public/service kibana-app-arch
/src/plugins/saved_objects/ kibana-app-arch
/src/plugins/vis_default_editor kibana-app-arch
/x-pack/plugins/advanced_ui_actions/ kibana-app-arch
/x-pack/plugins/drilldowns/ kibana-app-arch
/x-pack/plugins/apm/ apm-ui
/x-pack/test/functional/apps/apm/ apm-ui
/src/legacy/core_plugins/apm_oss/ apm-ui
/src/plugins/apm_oss/ apm-ui
/src/apm.js vigneshshanmugam
/src/legacy/ui/public/apm apm-ui
/x-pack/legacy/plugins/apm/ apm-ui
/x-pack/plugins/observability/ observability-ui
/x-pack/legacy/plugins/beats_management/ beats
/x-pack/plugins/beats_management/ beats
/x-pack/plugins/canvas/ canvas
/x-pack/test/functional/apps/canvas/ canvas
/src/plugins/kibana_react/public/code_editor/ canvas
/x-pack/legacy/plugins/canvas/ canvas
/src/plugins/home/public kibana-core-ui
/src/plugins/home/server/*.ts kibana-core-ui
/src/plugins/home/server/services/ kibana-core-ui
/src/legacy/core_plugins/kibana/public/home/*.ts kibana-core-ui
/src/legacy/core_plugins/kibana/public/home/*.scss kibana-core-ui
/src/legacy/core_plugins/kibana/public/home/np_ready/ kibana-core-ui
/src/legacy/core_plugins/newsfeed kibana-core-ui
/src/plugins/newsfeed kibana-core-ui
/src/plugins/home/ kibana-core-ui
/x-pack/legacy/plugins/infra/ logs-metrics-ui
/x-pack/plugins/infra/ logs-metrics-ui
/x-pack/legacy/plugins/ingest_manager/ ingest-management
/x-pack/plugins/ingest_manager/ ingest-management
/x-pack/plugins/uptime uptime
/x-pack/legacy/plugins/uptime uptime
/x-pack/legacy/plugins/monitoring/ stack-monitoring-ui
/x-pack/plugins/monitoring stack-monitoring-ui
/x-pack/legacy/plugins/ml/ ml-ui
/x-pack/plugins/ml/ ml-ui
/x-pack/test/functional/apps/machine_learning/ ml-ui
/x-pack/test/functional/services/machine_learning/ ml-ui
/x-pack/test/functional/services/ml.ts ml-ui
/x-pack/plugins/transform/ ml-ui
/x-pack/test/functional/apps/transform/ ml-ui
/x-pack/test/functional/services/transform_ui/ ml-ui
/x-pack/test/functional/services/transform.ts ml-ui
/x-pack/legacy/plugins/maps/ kibana-gis
/x-pack/plugins/maps/ kibana-gis
/x-pack/test/api_integration/apis/maps/ kibana-gis
/x-pack/test/functional/apps/maps/ kibana-gis
/x-pack/test/functional/es_archives/maps/ kibana-gis
/x-pack/test/visual_regression/tests/maps/index.js kibana-gis
/src/legacy/core_plugins/region_map kibana-gis
/src/legacy/core_plugins/tile_map kibana-gis
/src/plugins/maps_legacy/ kibana-gis
/x-pack/plugins/file_upload kibana-gis
/x-pack/plugins/maps_legacy_licensing kibana-gis
/src/plugins/home/server/tutorials kibana-gis
/src/dev/ kibana-operations
/src/setup_node_env/ kibana-operations
/src/optimize/ kibana-operations
/packages/*eslint*/ kibana-operations
/packages/*babel*/ kibana-operations
/packages/kbn-dev-utils*/ kibana-operations
/packages/kbn-es/ kibana-operations
/packages/kbn-optimizer/ kibana-operations
/packages/kbn-pm/ kibana-operations
/packages/kbn-test/ kibana-operations
/packages/kbn-ui-shared-deps/ kibana-operations
/packages/kbn-es-archiver/ kibana-operations
/src/legacy/server/keystore/ kibana-operations
/src/legacy/server/pid/ kibana-operations
/src/legacy/server/sass/ kibana-operations
/src/legacy/server/utils/ kibana-operations
/src/legacy/server/warnings/ kibana-operations
/.ci/es-snapshots/ kibana-operations
/vars/ kibana-operations
/packages/kbn-babel kibana-operations
/packages/kbn-eslint kibana-operations
/packages/kbn-expect kibana-operations
/packages/kbn-test-subj-selector/ kibana-operations
/src/test_utils/ kibana-operations
/src/dev/code_coverage kibana-qa
/test/functional/services/common kibana-qa
/test/functional/services/lib kibana-qa
/test/functional/services/remote kibana-qa
/vars/kibanaCoverage.groovy kibana-qa
/vars/kibanaTeamAssign.groovy kibana-qa
/src/core/ kibana-platform
/config/kibana.yml kibana-platform
/x-pack/plugins/features/ kibana-platform
/x-pack/plugins/licensing/ kibana-platform
/x-pack/plugins/global_search/ kibana-platform
/x-pack/plugins/cloud/ kibana-platform
/x-pack/test/saved_objects_field_count/ kibana-platform
/packages/kbn-config-schema/ kibana-platform
/src/legacy/server/config/ kibana-platform
/src/legacy/server/http/ kibana-platform
/src/legacy/server/logging/ kibana-platform
/src/legacy/server/saved_objects/  kibana-platform
/src/legacy/server/status/ kibana-platform
/src/plugins/status_page/ kibana-platform
/src/plugins/saved_objects_management/ kibana-platform
/src/dev/run_check_published_api_changes.ts kibana-platform
/src/core/server/csp/ kibana-security
/src/legacy/core_plugins/kibana/server/lib kibana-platform
/src/legacy/core_plugins/kibana/server/lib/management/saved_objects kibana-platform
/src/legacy/core_plugins/kibana/server/routes/api/import/ kibana-platform
/src/legacy/core_plugins/kibana/server/routes/api/export/ kibana-platform
/src/legacy/core_plugins/elasticsearch kibana-platform
/src/legacy/core_plugins/testbed kibana-platform
/src/legacy/ui/public/new_platform kibana-platform
/src/legacy/ui/public/plugin_discovery kibana-platform
/src/legacy/ui/public/chrome kibana-platform
/src/legacy/ui/public/notify kibana-platform
/src/legacy/ui/public/documentation_links kibana-platform
/src/legacy/ui/public/autoload kibana-platform
/src/plugins/legacy_export/ kibana-platform
/src/plugins/testbed/server/ kibana-platform
/x-pack/legacy/plugins/xpack_main/server/ kibana-platform
/x-pack/legacy/server/lib/ kibana-platform
/x-pack/plugins/global_search kibana-platform
/x-pack/legacy/plugins/security/ kibana-security
/x-pack/legacy/plugins/spaces/ kibana-security
/x-pack/plugins/spaces/ kibana-security
/x-pack/plugins/encrypted_saved_objects/ kibana-security
/x-pack/plugins/security/ kibana-security
/x-pack/test/api_integration/apis/security/ kibana-security
/src/legacy/ui/public/capabilities kibana-security
/x-pack/legacy/plugins/encrypted_saved_objects/ kibana-security
/src/dev/i18n/ kibana-localization
/src/legacy/server/i18n/ kibana-localization
/src/core/public/i18n/ kibana-localization
/packages/kbn-i18n/ kibana-localization
/x-pack/plugins/translations/ kibana-localization
/packages/kbn-analytics/ pulse
/packages/kbn-telemetry-tools/ kibana-telemetry
/src/plugins/kibana_usage_collection/ pulse
/src/plugins/newsfeed/ kibana-telemetry
/src/plugins/telemetry/ kibana-telemetry
/src/plugins/telemetry_collection_manager/ kibana-telemetry
/src/plugins/telemetry_management_section/ kibana-telemetry
/src/plugins/usage_collection/ pulse
/x-pack/plugins/telemetry_collection_xpack/ pulse
/.telemetryrc.json kibana-telemetry
/x-pack/.telemetryrc.json kibana-telemetry
/src/plugins/telemetry/schema/legacy_oss_plugins.json kibana-telemetry
/src/plugins/telemetry/schema/oss_plugins.json kibana-telemetry
/x-pack/plugins/telemetry_collection_xpack/schema/xpack_plugins.json kibana-telemetry
/x-pack/plugins/alerts/ kibana-alerting-services
/x-pack/plugins/actions/ kibana-alerting-services
/x-pack/plugins/event_log/ kibana-alerting-services
/x-pack/plugins/task_manager/ kibana-alerting-services
/x-pack/test/alerting_api_integration/ kibana-alerting-services
/x-pack/test/plugin_api_integration/plugins/task_manager/ kibana-alerting-services
/x-pack/test/plugin_api_integration/test_suites/task_manager/ kibana-alerting-services
/x-pack/plugins/triggers_actions_ui/ kibana-alerting-services
/x-pack/test/functional_with_es_ssl/apps/triggers_actions_ui/ kibana-alerting-services
/x-pack/test/functional_with_es_ssl/fixtures/plugins/alerts/ kibana-alerting-services
/x-pack/legacy/plugins/actions/ kibana-alerting-services
/x-pack/legacy/plugins/alerting/ kibana-alerting-services
/x-pack/legacy/plugins/task_manager kibana-alerting-services
/x-pack/legacy/plugins/triggers_actions_ui/ kibana-alerting-services
/x-pack/plugins/alerting_builtins kibana-alerting-services
**/*.scss kibana-design
/packages/kbn-ui-framework/ kibana-design
/x-pack/legacy/plugins/reporting kibana-reporting
/x-pack/plugins/reporting kibana-reporting
/x-pack/plugins/code/ code
/x-pack/plugins/logstash logstash
/src/legacy/core_plugins/ui_metric/ pulse
/src/plugins/telemetry pulse
/x-pack/plugins/oss_telemetry/ pulse
/x-pack/plugins/enterprise_search/ workplace-search-frontend
/x-pack/test/functional_enterprise_search/ workplace-search-frontend
/x-pack/plugins/enterprise_search/**/*.scss ent-search-design
/src/plugins/dev_tools/ es-ui
/src/plugins/console/ es-ui
/src/plugins/es_ui_shared/ es-ui
/x-pack/legacy/plugins/cross_cluster_replication/ es-ui
/x-pack/plugins/index_lifecycle_management/ es-ui
/x-pack/legacy/plugins/index_management/ es-ui
/x-pack/legacy/plugins/license_management/ es-ui
/x-pack/legacy/plugins/rollup/ es-ui
/x-pack/legacy/plugins/snapshot_restore/ es-ui
/x-pack/legacy/plugins/upgrade_assistant/ es-ui
/x-pack/plugins/console_extensions/ es-ui
/x-pack/plugins/es_ui_shared/ es-ui
/x-pack/plugins/grokdebugger/ es-ui
/x-pack/plugins/index_management/ es-ui
/x-pack/plugins/license_management/ es-ui
/x-pack/plugins/painless_lab/ es-ui
/x-pack/plugins/remote_clusters/ es-ui
/x-pack/plugins/rollup/ es-ui
/x-pack/plugins/searchprofiler/ es-ui
/x-pack/plugins/snapshot_restore/ es-ui
/x-pack/plugins/upgrade_assistant/ es-ui
/x-pack/plugins/watcher/ es-ui
/x-pack/plugins/ingest_pipelines/ es-ui
/x-pack/legacy/server/lib/create_router/ es-ui
/x-pack/legacy/server/lib/check_license/ es-ui
/x-pack/plugins/cross_cluster_replication/ es-ui
/x-pack/plugins/endpoint/ siem
/x-pack/test/api_integration/apis/endpoint/ siem
/x-pack/test/endpoint_api_integration_no_ingest/ siem
/x-pack/test/security_solution_endpoint/ siem
/x-pack/test/functional/es_archives/endpoint/ siem
/x-pack/test/plugin_functional/plugins/resolver_test/ siem
/x-pack/test/plugin_functional/test_suites/resolver/ siem
/x-pack/plugins/security_solution/ siem
/x-pack/test/detection_engine_api_integration siem
/x-pack/test/api_integration/apis/security_solution siem
/x-pack/plugins/case siem
/x-pack/plugins/lists siem
/x-pack/legacy/plugins/siem/ siem
/x-pack/plugins/siem/ siem
/x-pack/plugins/security_solution/server/lib/detection_engine/rules/prepackaged_rules security-intelligence-analytics
`;
}
