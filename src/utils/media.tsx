import { mapValues } from 'lodash';

export const MEDIA_SIZES = {
	mobile: 320,
	tablet: 768,
	laptop: 1024,
	desktop: 1280,
};

const minMediaValues = mapValues(MEDIA_SIZES, (s) => `(min-width: ${s}px)`);

const maxMediaValues = mapValues(MEDIA_SIZES, (s) => `(max-width: ${s - 1}px)`);

export const minMedia = mapValues(minMediaValues, (s) => `@media ${s}`);

export const maxMedia = mapValues(maxMediaValues, (s) => `@media ${s}`);
