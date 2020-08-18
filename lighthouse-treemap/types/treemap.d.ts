// import _Util2 = require('webtreemap-cdt'); // TODO: types.
import _Util = require('../app/src/util.js');
import {RootNode as _RootNode} from '../../lighthouse-core/audits/treemap-data';
import {Node as _Node} from '../../lighthouse-core/audits/treemap-data';
import '../../types/lhr';
import '../../types/audit';
import '../../types/audit-details';

declare global {
  module Treemap {
    interface Options {
      lhr: LH.Result;
      mode: Mode;
    }

    interface Mode {
      selector: DataSelector;
      partitionBy?: string;
      highlightNodePaths?: Array<string[]>;
    }

    interface DataSelector {
      type: 'group' | 'rootNodeId';
      value: string;
      viewId: 'all' | 'unused-js' | 'large-js' | 'duplicate-js';
    }

    type RootNode = _RootNode;
    type Node = _Node;
  }

  interface WebTreeMapOptions {
    padding: [number, number, number, number];
    caption(node: Treemap.Node): string;
    showNode?(node: Treemap.Node): boolean;
  }

  var webtreemap: {
    render(el: HTMLElement, data: any, options: WebTreeMapOptions): void;
    sort(data: any): void;
  };

  var Util: typeof _Util;

  interface Window {
    __treemapViewer: TreemapViewer;
    __TREEMAP_OPTIONS?: Treemap.Options;
  }
}

export {};