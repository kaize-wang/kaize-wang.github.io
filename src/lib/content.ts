export type PublishableContent = {
  visibility: 'private' | 'draft' | 'public';
  translationStatus: 'original' | 'ai-draft' | 'reviewed' | 'outdated';
};

/**
 * Public-site safety gate.
 *
 * Content is emitted only when it has explicitly been marked public AND the
 * localized version is either the original or a reviewed translation.
 * AI drafts and stale translations stay out of the generated site even if a
 * visibility field is changed accidentally.
 */
export function isPublishable(data: PublishableContent): boolean {
  return (
    data.visibility === 'public' &&
    (data.translationStatus === 'original' || data.translationStatus === 'reviewed')
  );
}
