import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { Language } from '../types';

interface EditorProps {
  language: Language;
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export function Editor({ language, value, onChange, readOnly = false }: EditorProps) {
  return (
    <div className="h-full w-full bg-gray-800 rounded-b-lg border border-gray-700 border-t-0">
      <MonacoEditor
        height="100%"
        language={language.id}
        value={value}
        onChange={(value) => onChange?.(value || '')}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          readOnly,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          wordWrap: 'on',
          scrollbar: {
            vertical: 'visible',
            horizontal: 'visible',
            useShadows: true,
            verticalScrollbarSize: 12,
            horizontalScrollbarSize: 12,
            verticalHasArrows: false,
            horizontalHasArrows: false,
            arrowSize: 0,
          },
          overviewRulerBorder: false,
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          fixedOverflowWidgets: true,
        }}
      />
    </div>
  );
}