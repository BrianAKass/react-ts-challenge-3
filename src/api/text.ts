/**
 * Represents a segment of text (usually a sentence) and its position within the original document.
 */
export interface TextSegment {
  text: string;
  position: number;
}

/**
 * Takes a body of text and breaks it into sentences, cleaning any extra whitespace or newline characters.
 */
export async function processText(params: { text: string }): Promise<TextSegment[]> {
  const { text } = params;

  const matches: RegExpMatchArray | null = text.match(/\S[^\.\!\?]*[\.\!\?]/g);

  return (matches || []).map((input: string, index: number) => {
    return {
      text: input,
      position: index,
    };
  });
}
