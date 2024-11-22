import { Mark } from 'tiptap';
import {
  markInputRule, markPasteRule, toggleMark
} from 'tiptap-commands';

export default class Superscript extends Mark {
  get name() {
    return 'subscript';
  }

  get schema() {
    return {
      parseDOM: [ {
        tag: 'sub'
      } ],
      toDOM: () => [ 'sub', 0 ]
    };
  }

  /*  keys({
      type
    }) {
      return {
        'Mod-d': toggleMark(type)
      };
    } */

  commands({
    type
  }) {
    return () => toggleMark(type);
  }

  inputRules({
    type
  }) {
    return [ markInputRule(/(?:^|[^_])(_([^_]+)_)$/, type), markInputRule(/(?:^|[^*])(\*([^*]+)\*)$/, type) ];
  }

  pasteRules({
    type
  }) {
    return [ markPasteRule(/_([^_]+)_/g, type), markPasteRule(/\*([^*]+)\*/g, type) ];
  }

}
