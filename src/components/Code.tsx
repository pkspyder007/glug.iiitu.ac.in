/* eslint-disable  @typescript-eslint/no-explicit-any */
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: any): any => {
  if (!RE.test(meta)) {
    return (): boolean => false;
  }
  const lineNumbers: any = RE.exec(meta)[1]
    .split(',')
    .map(v => v.split('-').map(x => parseInt(x, 10)));
  return (index: number): any => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]: [number, number]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    );
    return inRange;
  };
};

const Code = ({codeString, language, metastring, ...props}: any): JSX.Element => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring);

  return (
    <Highlight {...defaultProps} code={codeString} language={language} theme={theme} {...props}>
      {({className, style, tokens, getLineProps, getTokenProps}): any => (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({line, key: i});

              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`;
              }

              return (
                <div key={i} {...lineProps}>
                  <span className="line-number-style">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
// const Code = ({codeString, language, ...props}: any): JSX.Element => {
//   if (props['react-live']) {
//     return (
//       <LiveProvider code={codeString} noInline={true} theme={theme}>
//         <LiveEditor />
//         <LiveError />
//         <LivePreview />
//       </LiveProvider>
//     );
//   }
//   return (
//     <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
//       {({className, style, tokens, getLineProps, getTokenProps}): JSX.Element => (
//         <div className="gatsby-highlight" data-language={language}>
//           <pre className={className} style={style}>
//             {tokens.map((line, i) => (
//               <div key={i} {...getLineProps({line, key: i})}>
//                 {line.map((token, key) => (
//                   <span key={key} {...getTokenProps({token, key})} />
//                 ))}
//               </div>
//             ))}
//           </pre>
//         </div>
//       )}
//     </Highlight>
//   );
// };

// export default Code;
