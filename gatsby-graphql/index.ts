export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type ProjectsJson */
  childrenProjectsJson?: Maybe<Array<Maybe<ProjectsJson>>>;
  /** Returns the first child node of type ProjectsJson or null if there are no children of given type on this node */
  childProjectsJson?: Maybe<ProjectsJson>;
  /** Returns all children nodes filtered by type HeroJson */
  childrenHeroJson?: Maybe<Array<Maybe<HeroJson>>>;
  /** Returns the first child node of type HeroJson or null if there are no children of given type on this node */
  childHeroJson?: Maybe<HeroJson>;
  /** Returns all children nodes filtered by type AboutJson */
  childrenAboutJson?: Maybe<Array<Maybe<AboutJson>>>;
  /** Returns the first child node of type AboutJson or null if there are no children of given type on this node */
  childAboutJson?: Maybe<AboutJson>;
  /** Returns all children nodes filtered by type ContactJson */
  childrenContactJson?: Maybe<Array<Maybe<ContactJson>>>;
  /** Returns the first child node of type ContactJson or null if there are no children of given type on this node */
  childContactJson?: Maybe<ContactJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};


export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  _xparams?: Maybe<SitePageContext_Xparams>;
};

export type SitePageContext_Xparams = {
  title?: Maybe<Scalars['String']>;
};

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};


export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingLevels =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownExcerptFormats =
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerpt?: Maybe<Scalars['String']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type Fields = {
  slug?: Maybe<Scalars['String']>;
};

export type ProjectsJson = Node & {
  fields?: Maybe<Fields>;
  image?: Maybe<File>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  heroImage?: Maybe<ProjectsJsonHeroImage>;
  seo?: Maybe<ProjectsJsonSeo>;
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  gatsbyPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ProjectsJsonGatsbyPathArgs = {
  filePath?: Maybe<Scalars['String']>;
};

export type ProjectsJsonSeo = {
  title?: Maybe<Scalars['String']>;
  image?: Maybe<ProjectsJsonSeoImage>;
  description?: Maybe<Scalars['String']>;
};

export type ProjectsJsonHeroImage = Node & {
  data?: Maybe<File>;
  label?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ProjectsJsonSeoImage = Node & {
  data?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type HeroJson = Node & {
  fields?: Maybe<Fields>;
  title?: Maybe<Scalars['String']>;
  heroImage?: Maybe<HeroJsonHeroImage>;
  seo?: Maybe<HeroJsonSeo>;
  CTA?: Maybe<HeroJsonCta>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type HeroJsonSeo = {
  title?: Maybe<Scalars['String']>;
  image?: Maybe<HeroJsonSeoImage>;
  description?: Maybe<Scalars['String']>;
};

export type HeroJsonCta = {
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type HeroJsonSeoImage = Node & {
  data?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type HeroJsonHeroImage = Node & {
  data?: Maybe<File>;
  label?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type AboutJson = Node & {
  fields?: Maybe<Fields>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type AboutJsonSeoImage = Node & {
  data?: Maybe<File>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContactJson = Node & {
  fields?: Maybe<Fields>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ContactJsonSeoImage = Node & {
  data?: Maybe<File>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  postCssPlugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPostCssPlugins>>>;
  defaults?: Maybe<SitePluginPluginOptionsDefaults>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  codegenDelay?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  enableIdentityWidget?: Maybe<Scalars['Boolean']>;
  publicPath?: Maybe<Scalars['String']>;
  manualInit?: Maybe<Scalars['Boolean']>;
  includeRobots?: Maybe<Scalars['Boolean']>;
  modulePath?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPlugins = {
  purge?: Maybe<Array<Maybe<Scalars['String']>>>;
  darkMode?: Maybe<Scalars['Boolean']>;
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsTheme>;
  variants?: Maybe<SitePluginPluginOptionsPostCssPluginsVariants>;
};

export type SitePluginPluginOptionsPostCssPluginsTheme = {
  extend?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtend>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtend = {
  flex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFlex>;
  fontSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFontSize>;
  spacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendSpacing>;
  zIndex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendZIndex>;
  width?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendWidth>;
  maxWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidth>;
  minWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMinWidth>;
  inset?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendInset>;
  height?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendHeight>;
  minHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMinHeight>;
  maxHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMaxHeight>;
  padding?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendPadding>;
  lineHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendLineHeight>;
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColors>;
  transitionProperty?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendTransitionProperty>;
  boxShadow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendBoxShadow>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFlex = {
  _33_?: Maybe<Scalars['String']>;
  _50_?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFontSize = {
  _2xs?: Maybe<Scalars['String']>;
  _3xs?: Maybe<Scalars['String']>;
  _4xs?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendSpacing = {
  _15?: Maybe<Scalars['String']>;
  _18?: Maybe<Scalars['String']>;
  _55?: Maybe<Scalars['String']>;
  _65?: Maybe<Scalars['String']>;
  _84?: Maybe<Scalars['String']>;
  _100?: Maybe<Scalars['String']>;
  _120?: Maybe<Scalars['String']>;
  _140?: Maybe<Scalars['String']>;
  _160?: Maybe<Scalars['String']>;
  _26_67?: Maybe<Scalars['String']>;
  _33_33?: Maybe<Scalars['String']>;
  _78_5?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendZIndex = {
  _z_1?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendWidth = {
  inherit?: Maybe<Scalars['String']>;
  fit_content?: Maybe<Scalars['String']>;
  _1_10?: Maybe<Scalars['String']>;
  _2_10?: Maybe<Scalars['String']>;
  _3_10?: Maybe<Scalars['String']>;
  _4_10?: Maybe<Scalars['String']>;
  _5_10?: Maybe<Scalars['String']>;
  _6_10?: Maybe<Scalars['String']>;
  _7_10?: Maybe<Scalars['String']>;
  _8_10?: Maybe<Scalars['String']>;
  _9_10?: Maybe<Scalars['String']>;
  _48_?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidth = {
  _0?: Maybe<Scalars['String']>;
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  _7?: Maybe<Scalars['String']>;
  _8?: Maybe<Scalars['String']>;
  _9?: Maybe<Scalars['String']>;
  _10?: Maybe<Scalars['String']>;
  _11?: Maybe<Scalars['String']>;
  _12?: Maybe<Scalars['String']>;
  _14?: Maybe<Scalars['String']>;
  _15?: Maybe<Scalars['String']>;
  _16?: Maybe<Scalars['String']>;
  _18?: Maybe<Scalars['String']>;
  _20?: Maybe<Scalars['String']>;
  _24?: Maybe<Scalars['String']>;
  _28?: Maybe<Scalars['String']>;
  _32?: Maybe<Scalars['String']>;
  _36?: Maybe<Scalars['String']>;
  _40?: Maybe<Scalars['String']>;
  _44?: Maybe<Scalars['String']>;
  _48?: Maybe<Scalars['String']>;
  _52?: Maybe<Scalars['String']>;
  _55?: Maybe<Scalars['String']>;
  _56?: Maybe<Scalars['String']>;
  _60?: Maybe<Scalars['String']>;
  _64?: Maybe<Scalars['String']>;
  _65?: Maybe<Scalars['String']>;
  _72?: Maybe<Scalars['String']>;
  _80?: Maybe<Scalars['String']>;
  _84?: Maybe<Scalars['String']>;
  _96?: Maybe<Scalars['String']>;
  _100?: Maybe<Scalars['String']>;
  _120?: Maybe<Scalars['String']>;
  _140?: Maybe<Scalars['String']>;
  _160?: Maybe<Scalars['String']>;
  auto?: Maybe<Scalars['String']>;
  px?: Maybe<Scalars['String']>;
  _0_5?: Maybe<Scalars['String']>;
  _1_5?: Maybe<Scalars['String']>;
  _2_5?: Maybe<Scalars['String']>;
  _3_5?: Maybe<Scalars['String']>;
  _1_2?: Maybe<Scalars['String']>;
  _1_3?: Maybe<Scalars['String']>;
  _2_3?: Maybe<Scalars['String']>;
  _1_4?: Maybe<Scalars['String']>;
  _2_4?: Maybe<Scalars['String']>;
  _3_4?: Maybe<Scalars['String']>;
  _4_5?: Maybe<Scalars['String']>;
  _1_6?: Maybe<Scalars['String']>;
  _2_6?: Maybe<Scalars['String']>;
  _3_6?: Maybe<Scalars['String']>;
  _4_6?: Maybe<Scalars['String']>;
  _5_6?: Maybe<Scalars['String']>;
  _1_12?: Maybe<Scalars['String']>;
  _2_12?: Maybe<Scalars['String']>;
  _3_12?: Maybe<Scalars['String']>;
  _4_12?: Maybe<Scalars['String']>;
  _5_12?: Maybe<Scalars['String']>;
  _6_12?: Maybe<Scalars['String']>;
  _7_12?: Maybe<Scalars['String']>;
  _8_12?: Maybe<Scalars['String']>;
  _9_12?: Maybe<Scalars['String']>;
  _10_12?: Maybe<Scalars['String']>;
  _11_12?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['String']>;
  screen?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['String']>;
  _26_67?: Maybe<Scalars['String']>;
  _33_33?: Maybe<Scalars['String']>;
  _78_5?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  _1_7?: Maybe<Scalars['String']>;
  _1_8?: Maybe<Scalars['String']>;
  _1_10?: Maybe<Scalars['String']>;
  _2_10?: Maybe<Scalars['String']>;
  _3_10?: Maybe<Scalars['String']>;
  _4_10?: Maybe<Scalars['String']>;
  _5_10?: Maybe<Scalars['String']>;
  _6_10?: Maybe<Scalars['String']>;
  _7_10?: Maybe<Scalars['String']>;
  _8_10?: Maybe<Scalars['String']>;
  _9_10?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMinWidth = {
  _0?: Maybe<Scalars['String']>;
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  _7?: Maybe<Scalars['String']>;
  _8?: Maybe<Scalars['String']>;
  _9?: Maybe<Scalars['String']>;
  _10?: Maybe<Scalars['String']>;
  _11?: Maybe<Scalars['String']>;
  _12?: Maybe<Scalars['String']>;
  _14?: Maybe<Scalars['String']>;
  _15?: Maybe<Scalars['String']>;
  _16?: Maybe<Scalars['String']>;
  _18?: Maybe<Scalars['String']>;
  _20?: Maybe<Scalars['String']>;
  _24?: Maybe<Scalars['String']>;
  _28?: Maybe<Scalars['String']>;
  _32?: Maybe<Scalars['String']>;
  _36?: Maybe<Scalars['String']>;
  _40?: Maybe<Scalars['String']>;
  _44?: Maybe<Scalars['String']>;
  _48?: Maybe<Scalars['String']>;
  _52?: Maybe<Scalars['String']>;
  _55?: Maybe<Scalars['String']>;
  _56?: Maybe<Scalars['String']>;
  _60?: Maybe<Scalars['String']>;
  _64?: Maybe<Scalars['String']>;
  _65?: Maybe<Scalars['String']>;
  _72?: Maybe<Scalars['String']>;
  _80?: Maybe<Scalars['String']>;
  _84?: Maybe<Scalars['String']>;
  _96?: Maybe<Scalars['String']>;
  _100?: Maybe<Scalars['String']>;
  _120?: Maybe<Scalars['String']>;
  _140?: Maybe<Scalars['String']>;
  _160?: Maybe<Scalars['String']>;
  auto?: Maybe<Scalars['String']>;
  px?: Maybe<Scalars['String']>;
  _0_5?: Maybe<Scalars['String']>;
  _1_5?: Maybe<Scalars['String']>;
  _2_5?: Maybe<Scalars['String']>;
  _3_5?: Maybe<Scalars['String']>;
  _1_2?: Maybe<Scalars['String']>;
  _1_3?: Maybe<Scalars['String']>;
  _2_3?: Maybe<Scalars['String']>;
  _1_4?: Maybe<Scalars['String']>;
  _2_4?: Maybe<Scalars['String']>;
  _3_4?: Maybe<Scalars['String']>;
  _4_5?: Maybe<Scalars['String']>;
  _1_6?: Maybe<Scalars['String']>;
  _2_6?: Maybe<Scalars['String']>;
  _3_6?: Maybe<Scalars['String']>;
  _4_6?: Maybe<Scalars['String']>;
  _5_6?: Maybe<Scalars['String']>;
  _1_12?: Maybe<Scalars['String']>;
  _2_12?: Maybe<Scalars['String']>;
  _3_12?: Maybe<Scalars['String']>;
  _4_12?: Maybe<Scalars['String']>;
  _5_12?: Maybe<Scalars['String']>;
  _6_12?: Maybe<Scalars['String']>;
  _7_12?: Maybe<Scalars['String']>;
  _8_12?: Maybe<Scalars['String']>;
  _9_12?: Maybe<Scalars['String']>;
  _10_12?: Maybe<Scalars['String']>;
  _11_12?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['String']>;
  screen?: Maybe<Scalars['String']>;
  min?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['String']>;
  _26_67?: Maybe<Scalars['String']>;
  _33_33?: Maybe<Scalars['String']>;
  _78_5?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendInset = {
  mobile_nav_height?: Maybe<Scalars['String']>;
  _1_5?: Maybe<Scalars['String']>;
  _1_6?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendHeight = {
  desktop_nav?: Maybe<Scalars['String']>;
  mobile_nav?: Maybe<Scalars['String']>;
  mobile_nav_container?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMinHeight = {
  _0?: Maybe<Scalars['String']>;
  _1?: Maybe<Scalars['String']>;
  _2?: Maybe<Scalars['String']>;
  _3?: Maybe<Scalars['String']>;
  _4?: Maybe<Scalars['String']>;
  _5?: Maybe<Scalars['String']>;
  _6?: Maybe<Scalars['String']>;
  _7?: Maybe<Scalars['String']>;
  _8?: Maybe<Scalars['String']>;
  _9?: Maybe<Scalars['String']>;
  _10?: Maybe<Scalars['String']>;
  _11?: Maybe<Scalars['String']>;
  _12?: Maybe<Scalars['String']>;
  _14?: Maybe<Scalars['String']>;
  _16?: Maybe<Scalars['String']>;
  _20?: Maybe<Scalars['String']>;
  _24?: Maybe<Scalars['String']>;
  _28?: Maybe<Scalars['String']>;
  _32?: Maybe<Scalars['String']>;
  _36?: Maybe<Scalars['String']>;
  _40?: Maybe<Scalars['String']>;
  _44?: Maybe<Scalars['String']>;
  _48?: Maybe<Scalars['String']>;
  _52?: Maybe<Scalars['String']>;
  _56?: Maybe<Scalars['String']>;
  _60?: Maybe<Scalars['String']>;
  _64?: Maybe<Scalars['String']>;
  _72?: Maybe<Scalars['String']>;
  _80?: Maybe<Scalars['String']>;
  _96?: Maybe<Scalars['String']>;
  auto?: Maybe<Scalars['String']>;
  px?: Maybe<Scalars['String']>;
  _0_5?: Maybe<Scalars['String']>;
  _1_5?: Maybe<Scalars['String']>;
  _2_5?: Maybe<Scalars['String']>;
  _3_5?: Maybe<Scalars['String']>;
  _1_2?: Maybe<Scalars['String']>;
  _1_3?: Maybe<Scalars['String']>;
  _2_3?: Maybe<Scalars['String']>;
  _1_4?: Maybe<Scalars['String']>;
  _2_4?: Maybe<Scalars['String']>;
  _3_4?: Maybe<Scalars['String']>;
  _4_5?: Maybe<Scalars['String']>;
  _1_6?: Maybe<Scalars['String']>;
  _2_6?: Maybe<Scalars['String']>;
  _3_6?: Maybe<Scalars['String']>;
  _4_6?: Maybe<Scalars['String']>;
  _5_6?: Maybe<Scalars['String']>;
  full?: Maybe<Scalars['String']>;
  screen?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMaxHeight = {
  home_hero_carousel?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendPadding = {
  _15?: Maybe<Scalars['String']>;
  _2_67?: Maybe<Scalars['String']>;
  _1_2?: Maybe<Scalars['String']>;
  _1_3?: Maybe<Scalars['String']>;
  _1_4?: Maybe<Scalars['String']>;
  _1_5?: Maybe<Scalars['String']>;
  _1_6?: Maybe<Scalars['String']>;
  _1_7?: Maybe<Scalars['String']>;
  _1_8?: Maybe<Scalars['String']>;
  _1_9?: Maybe<Scalars['String']>;
  _1_10?: Maybe<Scalars['String']>;
  _1_11?: Maybe<Scalars['String']>;
  _1_12?: Maybe<Scalars['String']>;
  _1_13?: Maybe<Scalars['String']>;
  square?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendLineHeight = {
  _11?: Maybe<Scalars['String']>;
  extra_tight?: Maybe<Scalars['Float']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColors = {
  citrine?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrine>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrine = {
  background?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBackground>;
  primary?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePrimary>;
  gray?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineGray>;
  black?: Maybe<Scalars['String']>;
  accent?: Maybe<Scalars['String']>;
  off_white?: Maybe<Scalars['String']>;
  blue?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBlue>;
  turquoise?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineTurquoise>;
  orange?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineOrange>;
  purple?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePurple>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBackground = {
  overflow?: Maybe<Scalars['String']>;
  hero?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePrimary = {
  light?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineGray = {
  light?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBlue = {
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineTurquoise = {
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineOrange = {
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePurple = {
  light?: Maybe<Scalars['String']>;
  dark?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendTransitionProperty = {
  left?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendBoxShadow = {
  body?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPostCssPluginsVariants = {
  extend?: Maybe<SitePluginPluginOptionsPostCssPluginsVariantsExtend>;
};

export type SitePluginPluginOptionsPostCssPluginsVariantsExtend = {
  padding?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsDefaults = {
  formats?: Maybe<Array<Maybe<Scalars['String']>>>;
  placeholder?: Maybe<Scalars['String']>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  projectsJson?: Maybe<ProjectsJson>;
  allProjectsJson: ProjectsJsonConnection;
  projectsJsonHeroImage?: Maybe<ProjectsJsonHeroImage>;
  allProjectsJsonHeroImage: ProjectsJsonHeroImageConnection;
  projectsJsonSeoImage?: Maybe<ProjectsJsonSeoImage>;
  allProjectsJsonSeoImage: ProjectsJsonSeoImageConnection;
  heroJson?: Maybe<HeroJson>;
  allHeroJson: HeroJsonConnection;
  heroJsonSeoImage?: Maybe<HeroJsonSeoImage>;
  allHeroJsonSeoImage: HeroJsonSeoImageConnection;
  heroJsonHeroImage?: Maybe<HeroJsonHeroImage>;
  allHeroJsonHeroImage: HeroJsonHeroImageConnection;
  aboutJson?: Maybe<AboutJson>;
  allAboutJson: AboutJsonConnection;
  aboutJsonSeoImage?: Maybe<AboutJsonSeoImage>;
  allAboutJsonSeoImage: AboutJsonSeoImageConnection;
  contactJson?: Maybe<ContactJson>;
  allContactJson: ContactJsonConnection;
  contactJsonSeoImage?: Maybe<ContactJsonSeoImage>;
  allContactJsonSeoImage: ContactJsonSeoImageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenProjectsJson?: Maybe<ProjectsJsonFilterListInput>;
  childProjectsJson?: Maybe<ProjectsJsonFilterInput>;
  childrenHeroJson?: Maybe<HeroJsonFilterListInput>;
  childHeroJson?: Maybe<HeroJsonFilterInput>;
  childrenAboutJson?: Maybe<AboutJsonFilterListInput>;
  childAboutJson?: Maybe<AboutJsonFilterInput>;
  childrenContactJson?: Maybe<ContactJsonFilterListInput>;
  childContactJson?: Maybe<ContactJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProjectsJsonArgs = {
  fields?: Maybe<FieldsFilterInput>;
  image?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ProjectsJsonHeroImageFilterInput>;
  seo?: Maybe<ProjectsJsonSeoFilterInput>;
  technologies?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  gatsbyPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllProjectsJsonArgs = {
  filter?: Maybe<ProjectsJsonFilterInput>;
  sort?: Maybe<ProjectsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProjectsJsonHeroImageArgs = {
  data?: Maybe<FileFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllProjectsJsonHeroImageArgs = {
  filter?: Maybe<ProjectsJsonHeroImageFilterInput>;
  sort?: Maybe<ProjectsJsonHeroImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProjectsJsonSeoImageArgs = {
  data?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllProjectsJsonSeoImageArgs = {
  filter?: Maybe<ProjectsJsonSeoImageFilterInput>;
  sort?: Maybe<ProjectsJsonSeoImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryHeroJsonArgs = {
  fields?: Maybe<FieldsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<HeroJsonHeroImageFilterInput>;
  seo?: Maybe<HeroJsonSeoFilterInput>;
  CTA?: Maybe<HeroJsonCtaFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllHeroJsonArgs = {
  filter?: Maybe<HeroJsonFilterInput>;
  sort?: Maybe<HeroJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryHeroJsonSeoImageArgs = {
  data?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllHeroJsonSeoImageArgs = {
  filter?: Maybe<HeroJsonSeoImageFilterInput>;
  sort?: Maybe<HeroJsonSeoImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryHeroJsonHeroImageArgs = {
  data?: Maybe<FileFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllHeroJsonHeroImageArgs = {
  filter?: Maybe<HeroJsonHeroImageFilterInput>;
  sort?: Maybe<HeroJsonHeroImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAboutJsonArgs = {
  fields?: Maybe<FieldsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  technologies?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllAboutJsonArgs = {
  filter?: Maybe<AboutJsonFilterInput>;
  sort?: Maybe<AboutJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryAboutJsonSeoImageArgs = {
  data?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllAboutJsonSeoImageArgs = {
  filter?: Maybe<AboutJsonSeoImageFilterInput>;
  sort?: Maybe<AboutJsonSeoImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContactJsonArgs = {
  fields?: Maybe<FieldsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContactJsonArgs = {
  filter?: Maybe<ContactJsonFilterInput>;
  sort?: Maybe<ContactJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContactJsonSeoImageArgs = {
  data?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContactJsonSeoImageArgs = {
  filter?: Maybe<ContactJsonSeoImageFilterInput>;
  sort?: Maybe<ContactJsonSeoImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ProjectsJsonFilterListInput = {
  elemMatch?: Maybe<ProjectsJsonFilterInput>;
};

export type ProjectsJsonFilterInput = {
  fields?: Maybe<FieldsFilterInput>;
  image?: Maybe<FileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<ProjectsJsonHeroImageFilterInput>;
  seo?: Maybe<ProjectsJsonSeoFilterInput>;
  technologies?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  gatsbyPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenProjectsJson?: Maybe<ProjectsJsonFilterListInput>;
  childProjectsJson?: Maybe<ProjectsJsonFilterInput>;
  childrenHeroJson?: Maybe<HeroJsonFilterListInput>;
  childHeroJson?: Maybe<HeroJsonFilterInput>;
  childrenAboutJson?: Maybe<AboutJsonFilterListInput>;
  childAboutJson?: Maybe<AboutJsonFilterInput>;
  childrenContactJson?: Maybe<ContactJsonFilterListInput>;
  childContactJson?: Maybe<ContactJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type HeroJsonFilterListInput = {
  elemMatch?: Maybe<HeroJsonFilterInput>;
};

export type HeroJsonFilterInput = {
  fields?: Maybe<FieldsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  heroImage?: Maybe<HeroJsonHeroImageFilterInput>;
  seo?: Maybe<HeroJsonSeoFilterInput>;
  CTA?: Maybe<HeroJsonCtaFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type HeroJsonHeroImageFilterInput = {
  data?: Maybe<FileFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type HeroJsonSeoFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<HeroJsonSeoImageFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type HeroJsonSeoImageFilterInput = {
  data?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type HeroJsonCtaFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type AboutJsonFilterListInput = {
  elemMatch?: Maybe<AboutJsonFilterInput>;
};

export type AboutJsonFilterInput = {
  fields?: Maybe<FieldsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  languages?: Maybe<StringQueryOperatorInput>;
  technologies?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContactJsonFilterListInput = {
  elemMatch?: Maybe<ContactJsonFilterInput>;
};

export type ContactJsonFilterInput = {
  fields?: Maybe<FieldsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ProjectsJsonHeroImageFilterInput = {
  data?: Maybe<FileFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ProjectsJsonSeoFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ProjectsJsonSeoImageFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ProjectsJsonSeoImageFilterInput = {
  data?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenProjectsJson'
  | 'childrenProjectsJson___fields___slug'
  | 'childrenProjectsJson___image___sourceInstanceName'
  | 'childrenProjectsJson___image___absolutePath'
  | 'childrenProjectsJson___image___relativePath'
  | 'childrenProjectsJson___image___extension'
  | 'childrenProjectsJson___image___size'
  | 'childrenProjectsJson___image___prettySize'
  | 'childrenProjectsJson___image___modifiedTime'
  | 'childrenProjectsJson___image___accessTime'
  | 'childrenProjectsJson___image___changeTime'
  | 'childrenProjectsJson___image___birthTime'
  | 'childrenProjectsJson___image___root'
  | 'childrenProjectsJson___image___dir'
  | 'childrenProjectsJson___image___base'
  | 'childrenProjectsJson___image___ext'
  | 'childrenProjectsJson___image___name'
  | 'childrenProjectsJson___image___relativeDirectory'
  | 'childrenProjectsJson___image___dev'
  | 'childrenProjectsJson___image___mode'
  | 'childrenProjectsJson___image___nlink'
  | 'childrenProjectsJson___image___uid'
  | 'childrenProjectsJson___image___gid'
  | 'childrenProjectsJson___image___rdev'
  | 'childrenProjectsJson___image___ino'
  | 'childrenProjectsJson___image___atimeMs'
  | 'childrenProjectsJson___image___mtimeMs'
  | 'childrenProjectsJson___image___ctimeMs'
  | 'childrenProjectsJson___image___atime'
  | 'childrenProjectsJson___image___mtime'
  | 'childrenProjectsJson___image___ctime'
  | 'childrenProjectsJson___image___birthtime'
  | 'childrenProjectsJson___image___birthtimeMs'
  | 'childrenProjectsJson___image___blksize'
  | 'childrenProjectsJson___image___blocks'
  | 'childrenProjectsJson___image___publicURL'
  | 'childrenProjectsJson___image___childrenImageSharp'
  | 'childrenProjectsJson___image___childrenImageSharp___gatsbyImageData'
  | 'childrenProjectsJson___image___childrenImageSharp___id'
  | 'childrenProjectsJson___image___childrenImageSharp___children'
  | 'childrenProjectsJson___image___childImageSharp___gatsbyImageData'
  | 'childrenProjectsJson___image___childImageSharp___id'
  | 'childrenProjectsJson___image___childImageSharp___children'
  | 'childrenProjectsJson___image___childrenProjectsJson'
  | 'childrenProjectsJson___image___childrenProjectsJson___title'
  | 'childrenProjectsJson___image___childrenProjectsJson___body'
  | 'childrenProjectsJson___image___childrenProjectsJson___technologies'
  | 'childrenProjectsJson___image___childrenProjectsJson___languages'
  | 'childrenProjectsJson___image___childrenProjectsJson___gatsbyPath'
  | 'childrenProjectsJson___image___childrenProjectsJson___id'
  | 'childrenProjectsJson___image___childrenProjectsJson___children'
  | 'childrenProjectsJson___image___childProjectsJson___title'
  | 'childrenProjectsJson___image___childProjectsJson___body'
  | 'childrenProjectsJson___image___childProjectsJson___technologies'
  | 'childrenProjectsJson___image___childProjectsJson___languages'
  | 'childrenProjectsJson___image___childProjectsJson___gatsbyPath'
  | 'childrenProjectsJson___image___childProjectsJson___id'
  | 'childrenProjectsJson___image___childProjectsJson___children'
  | 'childrenProjectsJson___image___childrenHeroJson'
  | 'childrenProjectsJson___image___childrenHeroJson___title'
  | 'childrenProjectsJson___image___childrenHeroJson___id'
  | 'childrenProjectsJson___image___childrenHeroJson___children'
  | 'childrenProjectsJson___image___childHeroJson___title'
  | 'childrenProjectsJson___image___childHeroJson___id'
  | 'childrenProjectsJson___image___childHeroJson___children'
  | 'childrenProjectsJson___image___childrenAboutJson'
  | 'childrenProjectsJson___image___childrenAboutJson___title'
  | 'childrenProjectsJson___image___childrenAboutJson___body'
  | 'childrenProjectsJson___image___childrenAboutJson___languages'
  | 'childrenProjectsJson___image___childrenAboutJson___technologies'
  | 'childrenProjectsJson___image___childrenAboutJson___id'
  | 'childrenProjectsJson___image___childrenAboutJson___children'
  | 'childrenProjectsJson___image___childAboutJson___title'
  | 'childrenProjectsJson___image___childAboutJson___body'
  | 'childrenProjectsJson___image___childAboutJson___languages'
  | 'childrenProjectsJson___image___childAboutJson___technologies'
  | 'childrenProjectsJson___image___childAboutJson___id'
  | 'childrenProjectsJson___image___childAboutJson___children'
  | 'childrenProjectsJson___image___childrenContactJson'
  | 'childrenProjectsJson___image___childrenContactJson___title'
  | 'childrenProjectsJson___image___childrenContactJson___body'
  | 'childrenProjectsJson___image___childrenContactJson___id'
  | 'childrenProjectsJson___image___childrenContactJson___children'
  | 'childrenProjectsJson___image___childContactJson___title'
  | 'childrenProjectsJson___image___childContactJson___body'
  | 'childrenProjectsJson___image___childContactJson___id'
  | 'childrenProjectsJson___image___childContactJson___children'
  | 'childrenProjectsJson___image___id'
  | 'childrenProjectsJson___image___parent___id'
  | 'childrenProjectsJson___image___parent___children'
  | 'childrenProjectsJson___image___children'
  | 'childrenProjectsJson___image___children___id'
  | 'childrenProjectsJson___image___children___children'
  | 'childrenProjectsJson___image___internal___content'
  | 'childrenProjectsJson___image___internal___contentDigest'
  | 'childrenProjectsJson___image___internal___description'
  | 'childrenProjectsJson___image___internal___fieldOwners'
  | 'childrenProjectsJson___image___internal___ignoreType'
  | 'childrenProjectsJson___image___internal___mediaType'
  | 'childrenProjectsJson___image___internal___owner'
  | 'childrenProjectsJson___image___internal___type'
  | 'childrenProjectsJson___title'
  | 'childrenProjectsJson___body'
  | 'childrenProjectsJson___heroImage___data___sourceInstanceName'
  | 'childrenProjectsJson___heroImage___data___absolutePath'
  | 'childrenProjectsJson___heroImage___data___relativePath'
  | 'childrenProjectsJson___heroImage___data___extension'
  | 'childrenProjectsJson___heroImage___data___size'
  | 'childrenProjectsJson___heroImage___data___prettySize'
  | 'childrenProjectsJson___heroImage___data___modifiedTime'
  | 'childrenProjectsJson___heroImage___data___accessTime'
  | 'childrenProjectsJson___heroImage___data___changeTime'
  | 'childrenProjectsJson___heroImage___data___birthTime'
  | 'childrenProjectsJson___heroImage___data___root'
  | 'childrenProjectsJson___heroImage___data___dir'
  | 'childrenProjectsJson___heroImage___data___base'
  | 'childrenProjectsJson___heroImage___data___ext'
  | 'childrenProjectsJson___heroImage___data___name'
  | 'childrenProjectsJson___heroImage___data___relativeDirectory'
  | 'childrenProjectsJson___heroImage___data___dev'
  | 'childrenProjectsJson___heroImage___data___mode'
  | 'childrenProjectsJson___heroImage___data___nlink'
  | 'childrenProjectsJson___heroImage___data___uid'
  | 'childrenProjectsJson___heroImage___data___gid'
  | 'childrenProjectsJson___heroImage___data___rdev'
  | 'childrenProjectsJson___heroImage___data___ino'
  | 'childrenProjectsJson___heroImage___data___atimeMs'
  | 'childrenProjectsJson___heroImage___data___mtimeMs'
  | 'childrenProjectsJson___heroImage___data___ctimeMs'
  | 'childrenProjectsJson___heroImage___data___atime'
  | 'childrenProjectsJson___heroImage___data___mtime'
  | 'childrenProjectsJson___heroImage___data___ctime'
  | 'childrenProjectsJson___heroImage___data___birthtime'
  | 'childrenProjectsJson___heroImage___data___birthtimeMs'
  | 'childrenProjectsJson___heroImage___data___blksize'
  | 'childrenProjectsJson___heroImage___data___blocks'
  | 'childrenProjectsJson___heroImage___data___publicURL'
  | 'childrenProjectsJson___heroImage___data___childrenImageSharp'
  | 'childrenProjectsJson___heroImage___data___childrenProjectsJson'
  | 'childrenProjectsJson___heroImage___data___childrenHeroJson'
  | 'childrenProjectsJson___heroImage___data___childrenAboutJson'
  | 'childrenProjectsJson___heroImage___data___childrenContactJson'
  | 'childrenProjectsJson___heroImage___data___id'
  | 'childrenProjectsJson___heroImage___data___children'
  | 'childrenProjectsJson___heroImage___label'
  | 'childrenProjectsJson___heroImage___alt'
  | 'childrenProjectsJson___heroImage___id'
  | 'childrenProjectsJson___heroImage___parent___id'
  | 'childrenProjectsJson___heroImage___parent___children'
  | 'childrenProjectsJson___heroImage___children'
  | 'childrenProjectsJson___heroImage___children___id'
  | 'childrenProjectsJson___heroImage___children___children'
  | 'childrenProjectsJson___heroImage___internal___content'
  | 'childrenProjectsJson___heroImage___internal___contentDigest'
  | 'childrenProjectsJson___heroImage___internal___description'
  | 'childrenProjectsJson___heroImage___internal___fieldOwners'
  | 'childrenProjectsJson___heroImage___internal___ignoreType'
  | 'childrenProjectsJson___heroImage___internal___mediaType'
  | 'childrenProjectsJson___heroImage___internal___owner'
  | 'childrenProjectsJson___heroImage___internal___type'
  | 'childrenProjectsJson___seo___title'
  | 'childrenProjectsJson___seo___image___alt'
  | 'childrenProjectsJson___seo___image___id'
  | 'childrenProjectsJson___seo___image___children'
  | 'childrenProjectsJson___seo___description'
  | 'childrenProjectsJson___technologies'
  | 'childrenProjectsJson___languages'
  | 'childrenProjectsJson___gatsbyPath'
  | 'childrenProjectsJson___id'
  | 'childrenProjectsJson___parent___id'
  | 'childrenProjectsJson___parent___parent___id'
  | 'childrenProjectsJson___parent___parent___children'
  | 'childrenProjectsJson___parent___children'
  | 'childrenProjectsJson___parent___children___id'
  | 'childrenProjectsJson___parent___children___children'
  | 'childrenProjectsJson___parent___internal___content'
  | 'childrenProjectsJson___parent___internal___contentDigest'
  | 'childrenProjectsJson___parent___internal___description'
  | 'childrenProjectsJson___parent___internal___fieldOwners'
  | 'childrenProjectsJson___parent___internal___ignoreType'
  | 'childrenProjectsJson___parent___internal___mediaType'
  | 'childrenProjectsJson___parent___internal___owner'
  | 'childrenProjectsJson___parent___internal___type'
  | 'childrenProjectsJson___children'
  | 'childrenProjectsJson___children___id'
  | 'childrenProjectsJson___children___parent___id'
  | 'childrenProjectsJson___children___parent___children'
  | 'childrenProjectsJson___children___children'
  | 'childrenProjectsJson___children___children___id'
  | 'childrenProjectsJson___children___children___children'
  | 'childrenProjectsJson___children___internal___content'
  | 'childrenProjectsJson___children___internal___contentDigest'
  | 'childrenProjectsJson___children___internal___description'
  | 'childrenProjectsJson___children___internal___fieldOwners'
  | 'childrenProjectsJson___children___internal___ignoreType'
  | 'childrenProjectsJson___children___internal___mediaType'
  | 'childrenProjectsJson___children___internal___owner'
  | 'childrenProjectsJson___children___internal___type'
  | 'childrenProjectsJson___internal___content'
  | 'childrenProjectsJson___internal___contentDigest'
  | 'childrenProjectsJson___internal___description'
  | 'childrenProjectsJson___internal___fieldOwners'
  | 'childrenProjectsJson___internal___ignoreType'
  | 'childrenProjectsJson___internal___mediaType'
  | 'childrenProjectsJson___internal___owner'
  | 'childrenProjectsJson___internal___type'
  | 'childProjectsJson___fields___slug'
  | 'childProjectsJson___image___sourceInstanceName'
  | 'childProjectsJson___image___absolutePath'
  | 'childProjectsJson___image___relativePath'
  | 'childProjectsJson___image___extension'
  | 'childProjectsJson___image___size'
  | 'childProjectsJson___image___prettySize'
  | 'childProjectsJson___image___modifiedTime'
  | 'childProjectsJson___image___accessTime'
  | 'childProjectsJson___image___changeTime'
  | 'childProjectsJson___image___birthTime'
  | 'childProjectsJson___image___root'
  | 'childProjectsJson___image___dir'
  | 'childProjectsJson___image___base'
  | 'childProjectsJson___image___ext'
  | 'childProjectsJson___image___name'
  | 'childProjectsJson___image___relativeDirectory'
  | 'childProjectsJson___image___dev'
  | 'childProjectsJson___image___mode'
  | 'childProjectsJson___image___nlink'
  | 'childProjectsJson___image___uid'
  | 'childProjectsJson___image___gid'
  | 'childProjectsJson___image___rdev'
  | 'childProjectsJson___image___ino'
  | 'childProjectsJson___image___atimeMs'
  | 'childProjectsJson___image___mtimeMs'
  | 'childProjectsJson___image___ctimeMs'
  | 'childProjectsJson___image___atime'
  | 'childProjectsJson___image___mtime'
  | 'childProjectsJson___image___ctime'
  | 'childProjectsJson___image___birthtime'
  | 'childProjectsJson___image___birthtimeMs'
  | 'childProjectsJson___image___blksize'
  | 'childProjectsJson___image___blocks'
  | 'childProjectsJson___image___publicURL'
  | 'childProjectsJson___image___childrenImageSharp'
  | 'childProjectsJson___image___childrenImageSharp___gatsbyImageData'
  | 'childProjectsJson___image___childrenImageSharp___id'
  | 'childProjectsJson___image___childrenImageSharp___children'
  | 'childProjectsJson___image___childImageSharp___gatsbyImageData'
  | 'childProjectsJson___image___childImageSharp___id'
  | 'childProjectsJson___image___childImageSharp___children'
  | 'childProjectsJson___image___childrenProjectsJson'
  | 'childProjectsJson___image___childrenProjectsJson___title'
  | 'childProjectsJson___image___childrenProjectsJson___body'
  | 'childProjectsJson___image___childrenProjectsJson___technologies'
  | 'childProjectsJson___image___childrenProjectsJson___languages'
  | 'childProjectsJson___image___childrenProjectsJson___gatsbyPath'
  | 'childProjectsJson___image___childrenProjectsJson___id'
  | 'childProjectsJson___image___childrenProjectsJson___children'
  | 'childProjectsJson___image___childProjectsJson___title'
  | 'childProjectsJson___image___childProjectsJson___body'
  | 'childProjectsJson___image___childProjectsJson___technologies'
  | 'childProjectsJson___image___childProjectsJson___languages'
  | 'childProjectsJson___image___childProjectsJson___gatsbyPath'
  | 'childProjectsJson___image___childProjectsJson___id'
  | 'childProjectsJson___image___childProjectsJson___children'
  | 'childProjectsJson___image___childrenHeroJson'
  | 'childProjectsJson___image___childrenHeroJson___title'
  | 'childProjectsJson___image___childrenHeroJson___id'
  | 'childProjectsJson___image___childrenHeroJson___children'
  | 'childProjectsJson___image___childHeroJson___title'
  | 'childProjectsJson___image___childHeroJson___id'
  | 'childProjectsJson___image___childHeroJson___children'
  | 'childProjectsJson___image___childrenAboutJson'
  | 'childProjectsJson___image___childrenAboutJson___title'
  | 'childProjectsJson___image___childrenAboutJson___body'
  | 'childProjectsJson___image___childrenAboutJson___languages'
  | 'childProjectsJson___image___childrenAboutJson___technologies'
  | 'childProjectsJson___image___childrenAboutJson___id'
  | 'childProjectsJson___image___childrenAboutJson___children'
  | 'childProjectsJson___image___childAboutJson___title'
  | 'childProjectsJson___image___childAboutJson___body'
  | 'childProjectsJson___image___childAboutJson___languages'
  | 'childProjectsJson___image___childAboutJson___technologies'
  | 'childProjectsJson___image___childAboutJson___id'
  | 'childProjectsJson___image___childAboutJson___children'
  | 'childProjectsJson___image___childrenContactJson'
  | 'childProjectsJson___image___childrenContactJson___title'
  | 'childProjectsJson___image___childrenContactJson___body'
  | 'childProjectsJson___image___childrenContactJson___id'
  | 'childProjectsJson___image___childrenContactJson___children'
  | 'childProjectsJson___image___childContactJson___title'
  | 'childProjectsJson___image___childContactJson___body'
  | 'childProjectsJson___image___childContactJson___id'
  | 'childProjectsJson___image___childContactJson___children'
  | 'childProjectsJson___image___id'
  | 'childProjectsJson___image___parent___id'
  | 'childProjectsJson___image___parent___children'
  | 'childProjectsJson___image___children'
  | 'childProjectsJson___image___children___id'
  | 'childProjectsJson___image___children___children'
  | 'childProjectsJson___image___internal___content'
  | 'childProjectsJson___image___internal___contentDigest'
  | 'childProjectsJson___image___internal___description'
  | 'childProjectsJson___image___internal___fieldOwners'
  | 'childProjectsJson___image___internal___ignoreType'
  | 'childProjectsJson___image___internal___mediaType'
  | 'childProjectsJson___image___internal___owner'
  | 'childProjectsJson___image___internal___type'
  | 'childProjectsJson___title'
  | 'childProjectsJson___body'
  | 'childProjectsJson___heroImage___data___sourceInstanceName'
  | 'childProjectsJson___heroImage___data___absolutePath'
  | 'childProjectsJson___heroImage___data___relativePath'
  | 'childProjectsJson___heroImage___data___extension'
  | 'childProjectsJson___heroImage___data___size'
  | 'childProjectsJson___heroImage___data___prettySize'
  | 'childProjectsJson___heroImage___data___modifiedTime'
  | 'childProjectsJson___heroImage___data___accessTime'
  | 'childProjectsJson___heroImage___data___changeTime'
  | 'childProjectsJson___heroImage___data___birthTime'
  | 'childProjectsJson___heroImage___data___root'
  | 'childProjectsJson___heroImage___data___dir'
  | 'childProjectsJson___heroImage___data___base'
  | 'childProjectsJson___heroImage___data___ext'
  | 'childProjectsJson___heroImage___data___name'
  | 'childProjectsJson___heroImage___data___relativeDirectory'
  | 'childProjectsJson___heroImage___data___dev'
  | 'childProjectsJson___heroImage___data___mode'
  | 'childProjectsJson___heroImage___data___nlink'
  | 'childProjectsJson___heroImage___data___uid'
  | 'childProjectsJson___heroImage___data___gid'
  | 'childProjectsJson___heroImage___data___rdev'
  | 'childProjectsJson___heroImage___data___ino'
  | 'childProjectsJson___heroImage___data___atimeMs'
  | 'childProjectsJson___heroImage___data___mtimeMs'
  | 'childProjectsJson___heroImage___data___ctimeMs'
  | 'childProjectsJson___heroImage___data___atime'
  | 'childProjectsJson___heroImage___data___mtime'
  | 'childProjectsJson___heroImage___data___ctime'
  | 'childProjectsJson___heroImage___data___birthtime'
  | 'childProjectsJson___heroImage___data___birthtimeMs'
  | 'childProjectsJson___heroImage___data___blksize'
  | 'childProjectsJson___heroImage___data___blocks'
  | 'childProjectsJson___heroImage___data___publicURL'
  | 'childProjectsJson___heroImage___data___childrenImageSharp'
  | 'childProjectsJson___heroImage___data___childrenProjectsJson'
  | 'childProjectsJson___heroImage___data___childrenHeroJson'
  | 'childProjectsJson___heroImage___data___childrenAboutJson'
  | 'childProjectsJson___heroImage___data___childrenContactJson'
  | 'childProjectsJson___heroImage___data___id'
  | 'childProjectsJson___heroImage___data___children'
  | 'childProjectsJson___heroImage___label'
  | 'childProjectsJson___heroImage___alt'
  | 'childProjectsJson___heroImage___id'
  | 'childProjectsJson___heroImage___parent___id'
  | 'childProjectsJson___heroImage___parent___children'
  | 'childProjectsJson___heroImage___children'
  | 'childProjectsJson___heroImage___children___id'
  | 'childProjectsJson___heroImage___children___children'
  | 'childProjectsJson___heroImage___internal___content'
  | 'childProjectsJson___heroImage___internal___contentDigest'
  | 'childProjectsJson___heroImage___internal___description'
  | 'childProjectsJson___heroImage___internal___fieldOwners'
  | 'childProjectsJson___heroImage___internal___ignoreType'
  | 'childProjectsJson___heroImage___internal___mediaType'
  | 'childProjectsJson___heroImage___internal___owner'
  | 'childProjectsJson___heroImage___internal___type'
  | 'childProjectsJson___seo___title'
  | 'childProjectsJson___seo___image___alt'
  | 'childProjectsJson___seo___image___id'
  | 'childProjectsJson___seo___image___children'
  | 'childProjectsJson___seo___description'
  | 'childProjectsJson___technologies'
  | 'childProjectsJson___languages'
  | 'childProjectsJson___gatsbyPath'
  | 'childProjectsJson___id'
  | 'childProjectsJson___parent___id'
  | 'childProjectsJson___parent___parent___id'
  | 'childProjectsJson___parent___parent___children'
  | 'childProjectsJson___parent___children'
  | 'childProjectsJson___parent___children___id'
  | 'childProjectsJson___parent___children___children'
  | 'childProjectsJson___parent___internal___content'
  | 'childProjectsJson___parent___internal___contentDigest'
  | 'childProjectsJson___parent___internal___description'
  | 'childProjectsJson___parent___internal___fieldOwners'
  | 'childProjectsJson___parent___internal___ignoreType'
  | 'childProjectsJson___parent___internal___mediaType'
  | 'childProjectsJson___parent___internal___owner'
  | 'childProjectsJson___parent___internal___type'
  | 'childProjectsJson___children'
  | 'childProjectsJson___children___id'
  | 'childProjectsJson___children___parent___id'
  | 'childProjectsJson___children___parent___children'
  | 'childProjectsJson___children___children'
  | 'childProjectsJson___children___children___id'
  | 'childProjectsJson___children___children___children'
  | 'childProjectsJson___children___internal___content'
  | 'childProjectsJson___children___internal___contentDigest'
  | 'childProjectsJson___children___internal___description'
  | 'childProjectsJson___children___internal___fieldOwners'
  | 'childProjectsJson___children___internal___ignoreType'
  | 'childProjectsJson___children___internal___mediaType'
  | 'childProjectsJson___children___internal___owner'
  | 'childProjectsJson___children___internal___type'
  | 'childProjectsJson___internal___content'
  | 'childProjectsJson___internal___contentDigest'
  | 'childProjectsJson___internal___description'
  | 'childProjectsJson___internal___fieldOwners'
  | 'childProjectsJson___internal___ignoreType'
  | 'childProjectsJson___internal___mediaType'
  | 'childProjectsJson___internal___owner'
  | 'childProjectsJson___internal___type'
  | 'childrenHeroJson'
  | 'childrenHeroJson___fields___slug'
  | 'childrenHeroJson___title'
  | 'childrenHeroJson___heroImage___data___sourceInstanceName'
  | 'childrenHeroJson___heroImage___data___absolutePath'
  | 'childrenHeroJson___heroImage___data___relativePath'
  | 'childrenHeroJson___heroImage___data___extension'
  | 'childrenHeroJson___heroImage___data___size'
  | 'childrenHeroJson___heroImage___data___prettySize'
  | 'childrenHeroJson___heroImage___data___modifiedTime'
  | 'childrenHeroJson___heroImage___data___accessTime'
  | 'childrenHeroJson___heroImage___data___changeTime'
  | 'childrenHeroJson___heroImage___data___birthTime'
  | 'childrenHeroJson___heroImage___data___root'
  | 'childrenHeroJson___heroImage___data___dir'
  | 'childrenHeroJson___heroImage___data___base'
  | 'childrenHeroJson___heroImage___data___ext'
  | 'childrenHeroJson___heroImage___data___name'
  | 'childrenHeroJson___heroImage___data___relativeDirectory'
  | 'childrenHeroJson___heroImage___data___dev'
  | 'childrenHeroJson___heroImage___data___mode'
  | 'childrenHeroJson___heroImage___data___nlink'
  | 'childrenHeroJson___heroImage___data___uid'
  | 'childrenHeroJson___heroImage___data___gid'
  | 'childrenHeroJson___heroImage___data___rdev'
  | 'childrenHeroJson___heroImage___data___ino'
  | 'childrenHeroJson___heroImage___data___atimeMs'
  | 'childrenHeroJson___heroImage___data___mtimeMs'
  | 'childrenHeroJson___heroImage___data___ctimeMs'
  | 'childrenHeroJson___heroImage___data___atime'
  | 'childrenHeroJson___heroImage___data___mtime'
  | 'childrenHeroJson___heroImage___data___ctime'
  | 'childrenHeroJson___heroImage___data___birthtime'
  | 'childrenHeroJson___heroImage___data___birthtimeMs'
  | 'childrenHeroJson___heroImage___data___blksize'
  | 'childrenHeroJson___heroImage___data___blocks'
  | 'childrenHeroJson___heroImage___data___publicURL'
  | 'childrenHeroJson___heroImage___data___childrenImageSharp'
  | 'childrenHeroJson___heroImage___data___childrenProjectsJson'
  | 'childrenHeroJson___heroImage___data___childrenHeroJson'
  | 'childrenHeroJson___heroImage___data___childrenAboutJson'
  | 'childrenHeroJson___heroImage___data___childrenContactJson'
  | 'childrenHeroJson___heroImage___data___id'
  | 'childrenHeroJson___heroImage___data___children'
  | 'childrenHeroJson___heroImage___label'
  | 'childrenHeroJson___heroImage___alt'
  | 'childrenHeroJson___heroImage___id'
  | 'childrenHeroJson___heroImage___parent___id'
  | 'childrenHeroJson___heroImage___parent___children'
  | 'childrenHeroJson___heroImage___children'
  | 'childrenHeroJson___heroImage___children___id'
  | 'childrenHeroJson___heroImage___children___children'
  | 'childrenHeroJson___heroImage___internal___content'
  | 'childrenHeroJson___heroImage___internal___contentDigest'
  | 'childrenHeroJson___heroImage___internal___description'
  | 'childrenHeroJson___heroImage___internal___fieldOwners'
  | 'childrenHeroJson___heroImage___internal___ignoreType'
  | 'childrenHeroJson___heroImage___internal___mediaType'
  | 'childrenHeroJson___heroImage___internal___owner'
  | 'childrenHeroJson___heroImage___internal___type'
  | 'childrenHeroJson___seo___title'
  | 'childrenHeroJson___seo___image___alt'
  | 'childrenHeroJson___seo___image___id'
  | 'childrenHeroJson___seo___image___children'
  | 'childrenHeroJson___seo___description'
  | 'childrenHeroJson___CTA___label'
  | 'childrenHeroJson___CTA___url'
  | 'childrenHeroJson___id'
  | 'childrenHeroJson___parent___id'
  | 'childrenHeroJson___parent___parent___id'
  | 'childrenHeroJson___parent___parent___children'
  | 'childrenHeroJson___parent___children'
  | 'childrenHeroJson___parent___children___id'
  | 'childrenHeroJson___parent___children___children'
  | 'childrenHeroJson___parent___internal___content'
  | 'childrenHeroJson___parent___internal___contentDigest'
  | 'childrenHeroJson___parent___internal___description'
  | 'childrenHeroJson___parent___internal___fieldOwners'
  | 'childrenHeroJson___parent___internal___ignoreType'
  | 'childrenHeroJson___parent___internal___mediaType'
  | 'childrenHeroJson___parent___internal___owner'
  | 'childrenHeroJson___parent___internal___type'
  | 'childrenHeroJson___children'
  | 'childrenHeroJson___children___id'
  | 'childrenHeroJson___children___parent___id'
  | 'childrenHeroJson___children___parent___children'
  | 'childrenHeroJson___children___children'
  | 'childrenHeroJson___children___children___id'
  | 'childrenHeroJson___children___children___children'
  | 'childrenHeroJson___children___internal___content'
  | 'childrenHeroJson___children___internal___contentDigest'
  | 'childrenHeroJson___children___internal___description'
  | 'childrenHeroJson___children___internal___fieldOwners'
  | 'childrenHeroJson___children___internal___ignoreType'
  | 'childrenHeroJson___children___internal___mediaType'
  | 'childrenHeroJson___children___internal___owner'
  | 'childrenHeroJson___children___internal___type'
  | 'childrenHeroJson___internal___content'
  | 'childrenHeroJson___internal___contentDigest'
  | 'childrenHeroJson___internal___description'
  | 'childrenHeroJson___internal___fieldOwners'
  | 'childrenHeroJson___internal___ignoreType'
  | 'childrenHeroJson___internal___mediaType'
  | 'childrenHeroJson___internal___owner'
  | 'childrenHeroJson___internal___type'
  | 'childHeroJson___fields___slug'
  | 'childHeroJson___title'
  | 'childHeroJson___heroImage___data___sourceInstanceName'
  | 'childHeroJson___heroImage___data___absolutePath'
  | 'childHeroJson___heroImage___data___relativePath'
  | 'childHeroJson___heroImage___data___extension'
  | 'childHeroJson___heroImage___data___size'
  | 'childHeroJson___heroImage___data___prettySize'
  | 'childHeroJson___heroImage___data___modifiedTime'
  | 'childHeroJson___heroImage___data___accessTime'
  | 'childHeroJson___heroImage___data___changeTime'
  | 'childHeroJson___heroImage___data___birthTime'
  | 'childHeroJson___heroImage___data___root'
  | 'childHeroJson___heroImage___data___dir'
  | 'childHeroJson___heroImage___data___base'
  | 'childHeroJson___heroImage___data___ext'
  | 'childHeroJson___heroImage___data___name'
  | 'childHeroJson___heroImage___data___relativeDirectory'
  | 'childHeroJson___heroImage___data___dev'
  | 'childHeroJson___heroImage___data___mode'
  | 'childHeroJson___heroImage___data___nlink'
  | 'childHeroJson___heroImage___data___uid'
  | 'childHeroJson___heroImage___data___gid'
  | 'childHeroJson___heroImage___data___rdev'
  | 'childHeroJson___heroImage___data___ino'
  | 'childHeroJson___heroImage___data___atimeMs'
  | 'childHeroJson___heroImage___data___mtimeMs'
  | 'childHeroJson___heroImage___data___ctimeMs'
  | 'childHeroJson___heroImage___data___atime'
  | 'childHeroJson___heroImage___data___mtime'
  | 'childHeroJson___heroImage___data___ctime'
  | 'childHeroJson___heroImage___data___birthtime'
  | 'childHeroJson___heroImage___data___birthtimeMs'
  | 'childHeroJson___heroImage___data___blksize'
  | 'childHeroJson___heroImage___data___blocks'
  | 'childHeroJson___heroImage___data___publicURL'
  | 'childHeroJson___heroImage___data___childrenImageSharp'
  | 'childHeroJson___heroImage___data___childrenProjectsJson'
  | 'childHeroJson___heroImage___data___childrenHeroJson'
  | 'childHeroJson___heroImage___data___childrenAboutJson'
  | 'childHeroJson___heroImage___data___childrenContactJson'
  | 'childHeroJson___heroImage___data___id'
  | 'childHeroJson___heroImage___data___children'
  | 'childHeroJson___heroImage___label'
  | 'childHeroJson___heroImage___alt'
  | 'childHeroJson___heroImage___id'
  | 'childHeroJson___heroImage___parent___id'
  | 'childHeroJson___heroImage___parent___children'
  | 'childHeroJson___heroImage___children'
  | 'childHeroJson___heroImage___children___id'
  | 'childHeroJson___heroImage___children___children'
  | 'childHeroJson___heroImage___internal___content'
  | 'childHeroJson___heroImage___internal___contentDigest'
  | 'childHeroJson___heroImage___internal___description'
  | 'childHeroJson___heroImage___internal___fieldOwners'
  | 'childHeroJson___heroImage___internal___ignoreType'
  | 'childHeroJson___heroImage___internal___mediaType'
  | 'childHeroJson___heroImage___internal___owner'
  | 'childHeroJson___heroImage___internal___type'
  | 'childHeroJson___seo___title'
  | 'childHeroJson___seo___image___alt'
  | 'childHeroJson___seo___image___id'
  | 'childHeroJson___seo___image___children'
  | 'childHeroJson___seo___description'
  | 'childHeroJson___CTA___label'
  | 'childHeroJson___CTA___url'
  | 'childHeroJson___id'
  | 'childHeroJson___parent___id'
  | 'childHeroJson___parent___parent___id'
  | 'childHeroJson___parent___parent___children'
  | 'childHeroJson___parent___children'
  | 'childHeroJson___parent___children___id'
  | 'childHeroJson___parent___children___children'
  | 'childHeroJson___parent___internal___content'
  | 'childHeroJson___parent___internal___contentDigest'
  | 'childHeroJson___parent___internal___description'
  | 'childHeroJson___parent___internal___fieldOwners'
  | 'childHeroJson___parent___internal___ignoreType'
  | 'childHeroJson___parent___internal___mediaType'
  | 'childHeroJson___parent___internal___owner'
  | 'childHeroJson___parent___internal___type'
  | 'childHeroJson___children'
  | 'childHeroJson___children___id'
  | 'childHeroJson___children___parent___id'
  | 'childHeroJson___children___parent___children'
  | 'childHeroJson___children___children'
  | 'childHeroJson___children___children___id'
  | 'childHeroJson___children___children___children'
  | 'childHeroJson___children___internal___content'
  | 'childHeroJson___children___internal___contentDigest'
  | 'childHeroJson___children___internal___description'
  | 'childHeroJson___children___internal___fieldOwners'
  | 'childHeroJson___children___internal___ignoreType'
  | 'childHeroJson___children___internal___mediaType'
  | 'childHeroJson___children___internal___owner'
  | 'childHeroJson___children___internal___type'
  | 'childHeroJson___internal___content'
  | 'childHeroJson___internal___contentDigest'
  | 'childHeroJson___internal___description'
  | 'childHeroJson___internal___fieldOwners'
  | 'childHeroJson___internal___ignoreType'
  | 'childHeroJson___internal___mediaType'
  | 'childHeroJson___internal___owner'
  | 'childHeroJson___internal___type'
  | 'childrenAboutJson'
  | 'childrenAboutJson___fields___slug'
  | 'childrenAboutJson___title'
  | 'childrenAboutJson___body'
  | 'childrenAboutJson___languages'
  | 'childrenAboutJson___technologies'
  | 'childrenAboutJson___id'
  | 'childrenAboutJson___parent___id'
  | 'childrenAboutJson___parent___parent___id'
  | 'childrenAboutJson___parent___parent___children'
  | 'childrenAboutJson___parent___children'
  | 'childrenAboutJson___parent___children___id'
  | 'childrenAboutJson___parent___children___children'
  | 'childrenAboutJson___parent___internal___content'
  | 'childrenAboutJson___parent___internal___contentDigest'
  | 'childrenAboutJson___parent___internal___description'
  | 'childrenAboutJson___parent___internal___fieldOwners'
  | 'childrenAboutJson___parent___internal___ignoreType'
  | 'childrenAboutJson___parent___internal___mediaType'
  | 'childrenAboutJson___parent___internal___owner'
  | 'childrenAboutJson___parent___internal___type'
  | 'childrenAboutJson___children'
  | 'childrenAboutJson___children___id'
  | 'childrenAboutJson___children___parent___id'
  | 'childrenAboutJson___children___parent___children'
  | 'childrenAboutJson___children___children'
  | 'childrenAboutJson___children___children___id'
  | 'childrenAboutJson___children___children___children'
  | 'childrenAboutJson___children___internal___content'
  | 'childrenAboutJson___children___internal___contentDigest'
  | 'childrenAboutJson___children___internal___description'
  | 'childrenAboutJson___children___internal___fieldOwners'
  | 'childrenAboutJson___children___internal___ignoreType'
  | 'childrenAboutJson___children___internal___mediaType'
  | 'childrenAboutJson___children___internal___owner'
  | 'childrenAboutJson___children___internal___type'
  | 'childrenAboutJson___internal___content'
  | 'childrenAboutJson___internal___contentDigest'
  | 'childrenAboutJson___internal___description'
  | 'childrenAboutJson___internal___fieldOwners'
  | 'childrenAboutJson___internal___ignoreType'
  | 'childrenAboutJson___internal___mediaType'
  | 'childrenAboutJson___internal___owner'
  | 'childrenAboutJson___internal___type'
  | 'childAboutJson___fields___slug'
  | 'childAboutJson___title'
  | 'childAboutJson___body'
  | 'childAboutJson___languages'
  | 'childAboutJson___technologies'
  | 'childAboutJson___id'
  | 'childAboutJson___parent___id'
  | 'childAboutJson___parent___parent___id'
  | 'childAboutJson___parent___parent___children'
  | 'childAboutJson___parent___children'
  | 'childAboutJson___parent___children___id'
  | 'childAboutJson___parent___children___children'
  | 'childAboutJson___parent___internal___content'
  | 'childAboutJson___parent___internal___contentDigest'
  | 'childAboutJson___parent___internal___description'
  | 'childAboutJson___parent___internal___fieldOwners'
  | 'childAboutJson___parent___internal___ignoreType'
  | 'childAboutJson___parent___internal___mediaType'
  | 'childAboutJson___parent___internal___owner'
  | 'childAboutJson___parent___internal___type'
  | 'childAboutJson___children'
  | 'childAboutJson___children___id'
  | 'childAboutJson___children___parent___id'
  | 'childAboutJson___children___parent___children'
  | 'childAboutJson___children___children'
  | 'childAboutJson___children___children___id'
  | 'childAboutJson___children___children___children'
  | 'childAboutJson___children___internal___content'
  | 'childAboutJson___children___internal___contentDigest'
  | 'childAboutJson___children___internal___description'
  | 'childAboutJson___children___internal___fieldOwners'
  | 'childAboutJson___children___internal___ignoreType'
  | 'childAboutJson___children___internal___mediaType'
  | 'childAboutJson___children___internal___owner'
  | 'childAboutJson___children___internal___type'
  | 'childAboutJson___internal___content'
  | 'childAboutJson___internal___contentDigest'
  | 'childAboutJson___internal___description'
  | 'childAboutJson___internal___fieldOwners'
  | 'childAboutJson___internal___ignoreType'
  | 'childAboutJson___internal___mediaType'
  | 'childAboutJson___internal___owner'
  | 'childAboutJson___internal___type'
  | 'childrenContactJson'
  | 'childrenContactJson___fields___slug'
  | 'childrenContactJson___title'
  | 'childrenContactJson___body'
  | 'childrenContactJson___id'
  | 'childrenContactJson___parent___id'
  | 'childrenContactJson___parent___parent___id'
  | 'childrenContactJson___parent___parent___children'
  | 'childrenContactJson___parent___children'
  | 'childrenContactJson___parent___children___id'
  | 'childrenContactJson___parent___children___children'
  | 'childrenContactJson___parent___internal___content'
  | 'childrenContactJson___parent___internal___contentDigest'
  | 'childrenContactJson___parent___internal___description'
  | 'childrenContactJson___parent___internal___fieldOwners'
  | 'childrenContactJson___parent___internal___ignoreType'
  | 'childrenContactJson___parent___internal___mediaType'
  | 'childrenContactJson___parent___internal___owner'
  | 'childrenContactJson___parent___internal___type'
  | 'childrenContactJson___children'
  | 'childrenContactJson___children___id'
  | 'childrenContactJson___children___parent___id'
  | 'childrenContactJson___children___parent___children'
  | 'childrenContactJson___children___children'
  | 'childrenContactJson___children___children___id'
  | 'childrenContactJson___children___children___children'
  | 'childrenContactJson___children___internal___content'
  | 'childrenContactJson___children___internal___contentDigest'
  | 'childrenContactJson___children___internal___description'
  | 'childrenContactJson___children___internal___fieldOwners'
  | 'childrenContactJson___children___internal___ignoreType'
  | 'childrenContactJson___children___internal___mediaType'
  | 'childrenContactJson___children___internal___owner'
  | 'childrenContactJson___children___internal___type'
  | 'childrenContactJson___internal___content'
  | 'childrenContactJson___internal___contentDigest'
  | 'childrenContactJson___internal___description'
  | 'childrenContactJson___internal___fieldOwners'
  | 'childrenContactJson___internal___ignoreType'
  | 'childrenContactJson___internal___mediaType'
  | 'childrenContactJson___internal___owner'
  | 'childrenContactJson___internal___type'
  | 'childContactJson___fields___slug'
  | 'childContactJson___title'
  | 'childContactJson___body'
  | 'childContactJson___id'
  | 'childContactJson___parent___id'
  | 'childContactJson___parent___parent___id'
  | 'childContactJson___parent___parent___children'
  | 'childContactJson___parent___children'
  | 'childContactJson___parent___children___id'
  | 'childContactJson___parent___children___children'
  | 'childContactJson___parent___internal___content'
  | 'childContactJson___parent___internal___contentDigest'
  | 'childContactJson___parent___internal___description'
  | 'childContactJson___parent___internal___fieldOwners'
  | 'childContactJson___parent___internal___ignoreType'
  | 'childContactJson___parent___internal___mediaType'
  | 'childContactJson___parent___internal___owner'
  | 'childContactJson___parent___internal___type'
  | 'childContactJson___children'
  | 'childContactJson___children___id'
  | 'childContactJson___children___parent___id'
  | 'childContactJson___children___parent___children'
  | 'childContactJson___children___children'
  | 'childContactJson___children___children___id'
  | 'childContactJson___children___children___children'
  | 'childContactJson___children___internal___content'
  | 'childContactJson___children___internal___contentDigest'
  | 'childContactJson___children___internal___description'
  | 'childContactJson___children___internal___fieldOwners'
  | 'childContactJson___children___internal___ignoreType'
  | 'childContactJson___children___internal___mediaType'
  | 'childContactJson___children___internal___owner'
  | 'childContactJson___children___internal___type'
  | 'childContactJson___internal___content'
  | 'childContactJson___internal___contentDigest'
  | 'childContactJson___internal___description'
  | 'childContactJson___internal___fieldOwners'
  | 'childContactJson___internal___ignoreType'
  | 'childContactJson___internal___mediaType'
  | 'childContactJson___internal___owner'
  | 'childContactJson___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  _xparams?: Maybe<SitePageContext_XparamsFilterInput>;
};

export type SitePageContext_XparamsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  postCssPlugins?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterListInput>;
  defaults?: Maybe<SitePluginPluginOptionsDefaultsFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  codegenDelay?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  enableIdentityWidget?: Maybe<BooleanQueryOperatorInput>;
  publicPath?: Maybe<StringQueryOperatorInput>;
  manualInit?: Maybe<BooleanQueryOperatorInput>;
  includeRobots?: Maybe<BooleanQueryOperatorInput>;
  modulePath?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPostCssPluginsFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsFilterInput = {
  purge?: Maybe<StringQueryOperatorInput>;
  darkMode?: Maybe<BooleanQueryOperatorInput>;
  theme?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeFilterInput>;
  variants?: Maybe<SitePluginPluginOptionsPostCssPluginsVariantsFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeFilterInput = {
  extend?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFilterInput = {
  flex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFlexFilterInput>;
  fontSize?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendFontSizeFilterInput>;
  spacing?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendSpacingFilterInput>;
  zIndex?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendZIndexFilterInput>;
  width?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendWidthFilterInput>;
  maxWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidthFilterInput>;
  minWidth?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMinWidthFilterInput>;
  inset?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendInsetFilterInput>;
  height?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendHeightFilterInput>;
  minHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMinHeightFilterInput>;
  maxHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendMaxHeightFilterInput>;
  padding?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendPaddingFilterInput>;
  lineHeight?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendLineHeightFilterInput>;
  colors?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsFilterInput>;
  transitionProperty?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendTransitionPropertyFilterInput>;
  boxShadow?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendBoxShadowFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFlexFilterInput = {
  _33_?: Maybe<StringQueryOperatorInput>;
  _50_?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendFontSizeFilterInput = {
  _2xs?: Maybe<StringQueryOperatorInput>;
  _3xs?: Maybe<StringQueryOperatorInput>;
  _4xs?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendSpacingFilterInput = {
  _15?: Maybe<StringQueryOperatorInput>;
  _18?: Maybe<StringQueryOperatorInput>;
  _55?: Maybe<StringQueryOperatorInput>;
  _65?: Maybe<StringQueryOperatorInput>;
  _84?: Maybe<StringQueryOperatorInput>;
  _100?: Maybe<StringQueryOperatorInput>;
  _120?: Maybe<StringQueryOperatorInput>;
  _140?: Maybe<StringQueryOperatorInput>;
  _160?: Maybe<StringQueryOperatorInput>;
  _26_67?: Maybe<StringQueryOperatorInput>;
  _33_33?: Maybe<StringQueryOperatorInput>;
  _78_5?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendZIndexFilterInput = {
  _z_1?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendWidthFilterInput = {
  inherit?: Maybe<StringQueryOperatorInput>;
  fit_content?: Maybe<StringQueryOperatorInput>;
  _1_10?: Maybe<StringQueryOperatorInput>;
  _2_10?: Maybe<StringQueryOperatorInput>;
  _3_10?: Maybe<StringQueryOperatorInput>;
  _4_10?: Maybe<StringQueryOperatorInput>;
  _5_10?: Maybe<StringQueryOperatorInput>;
  _6_10?: Maybe<StringQueryOperatorInput>;
  _7_10?: Maybe<StringQueryOperatorInput>;
  _8_10?: Maybe<StringQueryOperatorInput>;
  _9_10?: Maybe<StringQueryOperatorInput>;
  _48_?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMaxWidthFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>;
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  _7?: Maybe<StringQueryOperatorInput>;
  _8?: Maybe<StringQueryOperatorInput>;
  _9?: Maybe<StringQueryOperatorInput>;
  _10?: Maybe<StringQueryOperatorInput>;
  _11?: Maybe<StringQueryOperatorInput>;
  _12?: Maybe<StringQueryOperatorInput>;
  _14?: Maybe<StringQueryOperatorInput>;
  _15?: Maybe<StringQueryOperatorInput>;
  _16?: Maybe<StringQueryOperatorInput>;
  _18?: Maybe<StringQueryOperatorInput>;
  _20?: Maybe<StringQueryOperatorInput>;
  _24?: Maybe<StringQueryOperatorInput>;
  _28?: Maybe<StringQueryOperatorInput>;
  _32?: Maybe<StringQueryOperatorInput>;
  _36?: Maybe<StringQueryOperatorInput>;
  _40?: Maybe<StringQueryOperatorInput>;
  _44?: Maybe<StringQueryOperatorInput>;
  _48?: Maybe<StringQueryOperatorInput>;
  _52?: Maybe<StringQueryOperatorInput>;
  _55?: Maybe<StringQueryOperatorInput>;
  _56?: Maybe<StringQueryOperatorInput>;
  _60?: Maybe<StringQueryOperatorInput>;
  _64?: Maybe<StringQueryOperatorInput>;
  _65?: Maybe<StringQueryOperatorInput>;
  _72?: Maybe<StringQueryOperatorInput>;
  _80?: Maybe<StringQueryOperatorInput>;
  _84?: Maybe<StringQueryOperatorInput>;
  _96?: Maybe<StringQueryOperatorInput>;
  _100?: Maybe<StringQueryOperatorInput>;
  _120?: Maybe<StringQueryOperatorInput>;
  _140?: Maybe<StringQueryOperatorInput>;
  _160?: Maybe<StringQueryOperatorInput>;
  auto?: Maybe<StringQueryOperatorInput>;
  px?: Maybe<StringQueryOperatorInput>;
  _0_5?: Maybe<StringQueryOperatorInput>;
  _1_5?: Maybe<StringQueryOperatorInput>;
  _2_5?: Maybe<StringQueryOperatorInput>;
  _3_5?: Maybe<StringQueryOperatorInput>;
  _1_2?: Maybe<StringQueryOperatorInput>;
  _1_3?: Maybe<StringQueryOperatorInput>;
  _2_3?: Maybe<StringQueryOperatorInput>;
  _1_4?: Maybe<StringQueryOperatorInput>;
  _2_4?: Maybe<StringQueryOperatorInput>;
  _3_4?: Maybe<StringQueryOperatorInput>;
  _4_5?: Maybe<StringQueryOperatorInput>;
  _1_6?: Maybe<StringQueryOperatorInput>;
  _2_6?: Maybe<StringQueryOperatorInput>;
  _3_6?: Maybe<StringQueryOperatorInput>;
  _4_6?: Maybe<StringQueryOperatorInput>;
  _5_6?: Maybe<StringQueryOperatorInput>;
  _1_12?: Maybe<StringQueryOperatorInput>;
  _2_12?: Maybe<StringQueryOperatorInput>;
  _3_12?: Maybe<StringQueryOperatorInput>;
  _4_12?: Maybe<StringQueryOperatorInput>;
  _5_12?: Maybe<StringQueryOperatorInput>;
  _6_12?: Maybe<StringQueryOperatorInput>;
  _7_12?: Maybe<StringQueryOperatorInput>;
  _8_12?: Maybe<StringQueryOperatorInput>;
  _9_12?: Maybe<StringQueryOperatorInput>;
  _10_12?: Maybe<StringQueryOperatorInput>;
  _11_12?: Maybe<StringQueryOperatorInput>;
  full?: Maybe<StringQueryOperatorInput>;
  screen?: Maybe<StringQueryOperatorInput>;
  min?: Maybe<StringQueryOperatorInput>;
  max?: Maybe<StringQueryOperatorInput>;
  _26_67?: Maybe<StringQueryOperatorInput>;
  _33_33?: Maybe<StringQueryOperatorInput>;
  _78_5?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  _1_7?: Maybe<StringQueryOperatorInput>;
  _1_8?: Maybe<StringQueryOperatorInput>;
  _1_10?: Maybe<StringQueryOperatorInput>;
  _2_10?: Maybe<StringQueryOperatorInput>;
  _3_10?: Maybe<StringQueryOperatorInput>;
  _4_10?: Maybe<StringQueryOperatorInput>;
  _5_10?: Maybe<StringQueryOperatorInput>;
  _6_10?: Maybe<StringQueryOperatorInput>;
  _7_10?: Maybe<StringQueryOperatorInput>;
  _8_10?: Maybe<StringQueryOperatorInput>;
  _9_10?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMinWidthFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>;
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  _7?: Maybe<StringQueryOperatorInput>;
  _8?: Maybe<StringQueryOperatorInput>;
  _9?: Maybe<StringQueryOperatorInput>;
  _10?: Maybe<StringQueryOperatorInput>;
  _11?: Maybe<StringQueryOperatorInput>;
  _12?: Maybe<StringQueryOperatorInput>;
  _14?: Maybe<StringQueryOperatorInput>;
  _15?: Maybe<StringQueryOperatorInput>;
  _16?: Maybe<StringQueryOperatorInput>;
  _18?: Maybe<StringQueryOperatorInput>;
  _20?: Maybe<StringQueryOperatorInput>;
  _24?: Maybe<StringQueryOperatorInput>;
  _28?: Maybe<StringQueryOperatorInput>;
  _32?: Maybe<StringQueryOperatorInput>;
  _36?: Maybe<StringQueryOperatorInput>;
  _40?: Maybe<StringQueryOperatorInput>;
  _44?: Maybe<StringQueryOperatorInput>;
  _48?: Maybe<StringQueryOperatorInput>;
  _52?: Maybe<StringQueryOperatorInput>;
  _55?: Maybe<StringQueryOperatorInput>;
  _56?: Maybe<StringQueryOperatorInput>;
  _60?: Maybe<StringQueryOperatorInput>;
  _64?: Maybe<StringQueryOperatorInput>;
  _65?: Maybe<StringQueryOperatorInput>;
  _72?: Maybe<StringQueryOperatorInput>;
  _80?: Maybe<StringQueryOperatorInput>;
  _84?: Maybe<StringQueryOperatorInput>;
  _96?: Maybe<StringQueryOperatorInput>;
  _100?: Maybe<StringQueryOperatorInput>;
  _120?: Maybe<StringQueryOperatorInput>;
  _140?: Maybe<StringQueryOperatorInput>;
  _160?: Maybe<StringQueryOperatorInput>;
  auto?: Maybe<StringQueryOperatorInput>;
  px?: Maybe<StringQueryOperatorInput>;
  _0_5?: Maybe<StringQueryOperatorInput>;
  _1_5?: Maybe<StringQueryOperatorInput>;
  _2_5?: Maybe<StringQueryOperatorInput>;
  _3_5?: Maybe<StringQueryOperatorInput>;
  _1_2?: Maybe<StringQueryOperatorInput>;
  _1_3?: Maybe<StringQueryOperatorInput>;
  _2_3?: Maybe<StringQueryOperatorInput>;
  _1_4?: Maybe<StringQueryOperatorInput>;
  _2_4?: Maybe<StringQueryOperatorInput>;
  _3_4?: Maybe<StringQueryOperatorInput>;
  _4_5?: Maybe<StringQueryOperatorInput>;
  _1_6?: Maybe<StringQueryOperatorInput>;
  _2_6?: Maybe<StringQueryOperatorInput>;
  _3_6?: Maybe<StringQueryOperatorInput>;
  _4_6?: Maybe<StringQueryOperatorInput>;
  _5_6?: Maybe<StringQueryOperatorInput>;
  _1_12?: Maybe<StringQueryOperatorInput>;
  _2_12?: Maybe<StringQueryOperatorInput>;
  _3_12?: Maybe<StringQueryOperatorInput>;
  _4_12?: Maybe<StringQueryOperatorInput>;
  _5_12?: Maybe<StringQueryOperatorInput>;
  _6_12?: Maybe<StringQueryOperatorInput>;
  _7_12?: Maybe<StringQueryOperatorInput>;
  _8_12?: Maybe<StringQueryOperatorInput>;
  _9_12?: Maybe<StringQueryOperatorInput>;
  _10_12?: Maybe<StringQueryOperatorInput>;
  _11_12?: Maybe<StringQueryOperatorInput>;
  full?: Maybe<StringQueryOperatorInput>;
  screen?: Maybe<StringQueryOperatorInput>;
  min?: Maybe<StringQueryOperatorInput>;
  max?: Maybe<StringQueryOperatorInput>;
  _26_67?: Maybe<StringQueryOperatorInput>;
  _33_33?: Maybe<StringQueryOperatorInput>;
  _78_5?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendInsetFilterInput = {
  mobile_nav_height?: Maybe<StringQueryOperatorInput>;
  _1_5?: Maybe<StringQueryOperatorInput>;
  _1_6?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendHeightFilterInput = {
  desktop_nav?: Maybe<StringQueryOperatorInput>;
  mobile_nav?: Maybe<StringQueryOperatorInput>;
  mobile_nav_container?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMinHeightFilterInput = {
  _0?: Maybe<StringQueryOperatorInput>;
  _1?: Maybe<StringQueryOperatorInput>;
  _2?: Maybe<StringQueryOperatorInput>;
  _3?: Maybe<StringQueryOperatorInput>;
  _4?: Maybe<StringQueryOperatorInput>;
  _5?: Maybe<StringQueryOperatorInput>;
  _6?: Maybe<StringQueryOperatorInput>;
  _7?: Maybe<StringQueryOperatorInput>;
  _8?: Maybe<StringQueryOperatorInput>;
  _9?: Maybe<StringQueryOperatorInput>;
  _10?: Maybe<StringQueryOperatorInput>;
  _11?: Maybe<StringQueryOperatorInput>;
  _12?: Maybe<StringQueryOperatorInput>;
  _14?: Maybe<StringQueryOperatorInput>;
  _16?: Maybe<StringQueryOperatorInput>;
  _20?: Maybe<StringQueryOperatorInput>;
  _24?: Maybe<StringQueryOperatorInput>;
  _28?: Maybe<StringQueryOperatorInput>;
  _32?: Maybe<StringQueryOperatorInput>;
  _36?: Maybe<StringQueryOperatorInput>;
  _40?: Maybe<StringQueryOperatorInput>;
  _44?: Maybe<StringQueryOperatorInput>;
  _48?: Maybe<StringQueryOperatorInput>;
  _52?: Maybe<StringQueryOperatorInput>;
  _56?: Maybe<StringQueryOperatorInput>;
  _60?: Maybe<StringQueryOperatorInput>;
  _64?: Maybe<StringQueryOperatorInput>;
  _72?: Maybe<StringQueryOperatorInput>;
  _80?: Maybe<StringQueryOperatorInput>;
  _96?: Maybe<StringQueryOperatorInput>;
  auto?: Maybe<StringQueryOperatorInput>;
  px?: Maybe<StringQueryOperatorInput>;
  _0_5?: Maybe<StringQueryOperatorInput>;
  _1_5?: Maybe<StringQueryOperatorInput>;
  _2_5?: Maybe<StringQueryOperatorInput>;
  _3_5?: Maybe<StringQueryOperatorInput>;
  _1_2?: Maybe<StringQueryOperatorInput>;
  _1_3?: Maybe<StringQueryOperatorInput>;
  _2_3?: Maybe<StringQueryOperatorInput>;
  _1_4?: Maybe<StringQueryOperatorInput>;
  _2_4?: Maybe<StringQueryOperatorInput>;
  _3_4?: Maybe<StringQueryOperatorInput>;
  _4_5?: Maybe<StringQueryOperatorInput>;
  _1_6?: Maybe<StringQueryOperatorInput>;
  _2_6?: Maybe<StringQueryOperatorInput>;
  _3_6?: Maybe<StringQueryOperatorInput>;
  _4_6?: Maybe<StringQueryOperatorInput>;
  _5_6?: Maybe<StringQueryOperatorInput>;
  full?: Maybe<StringQueryOperatorInput>;
  screen?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendMaxHeightFilterInput = {
  home_hero_carousel?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendPaddingFilterInput = {
  _15?: Maybe<StringQueryOperatorInput>;
  _2_67?: Maybe<StringQueryOperatorInput>;
  _1_2?: Maybe<StringQueryOperatorInput>;
  _1_3?: Maybe<StringQueryOperatorInput>;
  _1_4?: Maybe<StringQueryOperatorInput>;
  _1_5?: Maybe<StringQueryOperatorInput>;
  _1_6?: Maybe<StringQueryOperatorInput>;
  _1_7?: Maybe<StringQueryOperatorInput>;
  _1_8?: Maybe<StringQueryOperatorInput>;
  _1_9?: Maybe<StringQueryOperatorInput>;
  _1_10?: Maybe<StringQueryOperatorInput>;
  _1_11?: Maybe<StringQueryOperatorInput>;
  _1_12?: Maybe<StringQueryOperatorInput>;
  _1_13?: Maybe<StringQueryOperatorInput>;
  square?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendLineHeightFilterInput = {
  _11?: Maybe<StringQueryOperatorInput>;
  extra_tight?: Maybe<FloatQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsFilterInput = {
  citrine?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineFilterInput = {
  background?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBackgroundFilterInput>;
  primary?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePrimaryFilterInput>;
  gray?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineGrayFilterInput>;
  black?: Maybe<StringQueryOperatorInput>;
  accent?: Maybe<StringQueryOperatorInput>;
  off_white?: Maybe<StringQueryOperatorInput>;
  blue?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBlueFilterInput>;
  turquoise?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineTurquoiseFilterInput>;
  orange?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineOrangeFilterInput>;
  purple?: Maybe<SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePurpleFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBackgroundFilterInput = {
  overflow?: Maybe<StringQueryOperatorInput>;
  hero?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePrimaryFilterInput = {
  light?: Maybe<StringQueryOperatorInput>;
  medium?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineGrayFilterInput = {
  light?: Maybe<StringQueryOperatorInput>;
  medium?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineBlueFilterInput = {
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineTurquoiseFilterInput = {
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrineOrangeFilterInput = {
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendColorsCitrinePurpleFilterInput = {
  light?: Maybe<StringQueryOperatorInput>;
  dark?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendTransitionPropertyFilterInput = {
  left?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsThemeExtendBoxShadowFilterInput = {
  body?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPostCssPluginsVariantsFilterInput = {
  extend?: Maybe<SitePluginPluginOptionsPostCssPluginsVariantsExtendFilterInput>;
};

export type SitePluginPluginOptionsPostCssPluginsVariantsExtendFilterInput = {
  padding?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultsFilterInput = {
  formats?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
  breakpoints?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___title'
  | 'context____xparams___title'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___postCssPlugins'
  | 'pluginCreator___pluginOptions___postCssPlugins___purge'
  | 'pluginCreator___pluginOptions___postCssPlugins___darkMode'
  | 'pluginCreator___pluginOptions___defaults___formats'
  | 'pluginCreator___pluginOptions___defaults___placeholder'
  | 'pluginCreator___pluginOptions___defaults___breakpoints'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___codegenDelay'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___enableIdentityWidget'
  | 'pluginCreator___pluginOptions___publicPath'
  | 'pluginCreator___pluginOptions___manualInit'
  | 'pluginCreator___pluginOptions___includeRobots'
  | 'pluginCreator___pluginOptions___modulePath'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'html'
  | 'htmlAst'
  | 'excerpt'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ProjectsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonEdge>;
  nodes: Array<ProjectsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProjectsJsonGroupConnection>;
};


export type ProjectsJsonConnectionDistinctArgs = {
  field: ProjectsJsonFieldsEnum;
};


export type ProjectsJsonConnectionMaxArgs = {
  field: ProjectsJsonFieldsEnum;
};


export type ProjectsJsonConnectionMinArgs = {
  field: ProjectsJsonFieldsEnum;
};


export type ProjectsJsonConnectionSumArgs = {
  field: ProjectsJsonFieldsEnum;
};


export type ProjectsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectsJsonFieldsEnum;
};

export type ProjectsJsonEdge = {
  next?: Maybe<ProjectsJson>;
  node: ProjectsJson;
  previous?: Maybe<ProjectsJson>;
};

export type ProjectsJsonFieldsEnum =
  | 'fields___slug'
  | 'image___sourceInstanceName'
  | 'image___absolutePath'
  | 'image___relativePath'
  | 'image___extension'
  | 'image___size'
  | 'image___prettySize'
  | 'image___modifiedTime'
  | 'image___accessTime'
  | 'image___changeTime'
  | 'image___birthTime'
  | 'image___root'
  | 'image___dir'
  | 'image___base'
  | 'image___ext'
  | 'image___name'
  | 'image___relativeDirectory'
  | 'image___dev'
  | 'image___mode'
  | 'image___nlink'
  | 'image___uid'
  | 'image___gid'
  | 'image___rdev'
  | 'image___ino'
  | 'image___atimeMs'
  | 'image___mtimeMs'
  | 'image___ctimeMs'
  | 'image___atime'
  | 'image___mtime'
  | 'image___ctime'
  | 'image___birthtime'
  | 'image___birthtimeMs'
  | 'image___blksize'
  | 'image___blocks'
  | 'image___publicURL'
  | 'image___childrenImageSharp'
  | 'image___childrenImageSharp___fixed___base64'
  | 'image___childrenImageSharp___fixed___tracedSVG'
  | 'image___childrenImageSharp___fixed___aspectRatio'
  | 'image___childrenImageSharp___fixed___width'
  | 'image___childrenImageSharp___fixed___height'
  | 'image___childrenImageSharp___fixed___src'
  | 'image___childrenImageSharp___fixed___srcSet'
  | 'image___childrenImageSharp___fixed___srcWebp'
  | 'image___childrenImageSharp___fixed___srcSetWebp'
  | 'image___childrenImageSharp___fixed___originalName'
  | 'image___childrenImageSharp___fluid___base64'
  | 'image___childrenImageSharp___fluid___tracedSVG'
  | 'image___childrenImageSharp___fluid___aspectRatio'
  | 'image___childrenImageSharp___fluid___src'
  | 'image___childrenImageSharp___fluid___srcSet'
  | 'image___childrenImageSharp___fluid___srcWebp'
  | 'image___childrenImageSharp___fluid___srcSetWebp'
  | 'image___childrenImageSharp___fluid___sizes'
  | 'image___childrenImageSharp___fluid___originalImg'
  | 'image___childrenImageSharp___fluid___originalName'
  | 'image___childrenImageSharp___fluid___presentationWidth'
  | 'image___childrenImageSharp___fluid___presentationHeight'
  | 'image___childrenImageSharp___gatsbyImageData'
  | 'image___childrenImageSharp___original___width'
  | 'image___childrenImageSharp___original___height'
  | 'image___childrenImageSharp___original___src'
  | 'image___childrenImageSharp___resize___src'
  | 'image___childrenImageSharp___resize___tracedSVG'
  | 'image___childrenImageSharp___resize___width'
  | 'image___childrenImageSharp___resize___height'
  | 'image___childrenImageSharp___resize___aspectRatio'
  | 'image___childrenImageSharp___resize___originalName'
  | 'image___childrenImageSharp___id'
  | 'image___childrenImageSharp___parent___id'
  | 'image___childrenImageSharp___parent___children'
  | 'image___childrenImageSharp___children'
  | 'image___childrenImageSharp___children___id'
  | 'image___childrenImageSharp___children___children'
  | 'image___childrenImageSharp___internal___content'
  | 'image___childrenImageSharp___internal___contentDigest'
  | 'image___childrenImageSharp___internal___description'
  | 'image___childrenImageSharp___internal___fieldOwners'
  | 'image___childrenImageSharp___internal___ignoreType'
  | 'image___childrenImageSharp___internal___mediaType'
  | 'image___childrenImageSharp___internal___owner'
  | 'image___childrenImageSharp___internal___type'
  | 'image___childImageSharp___fixed___base64'
  | 'image___childImageSharp___fixed___tracedSVG'
  | 'image___childImageSharp___fixed___aspectRatio'
  | 'image___childImageSharp___fixed___width'
  | 'image___childImageSharp___fixed___height'
  | 'image___childImageSharp___fixed___src'
  | 'image___childImageSharp___fixed___srcSet'
  | 'image___childImageSharp___fixed___srcWebp'
  | 'image___childImageSharp___fixed___srcSetWebp'
  | 'image___childImageSharp___fixed___originalName'
  | 'image___childImageSharp___fluid___base64'
  | 'image___childImageSharp___fluid___tracedSVG'
  | 'image___childImageSharp___fluid___aspectRatio'
  | 'image___childImageSharp___fluid___src'
  | 'image___childImageSharp___fluid___srcSet'
  | 'image___childImageSharp___fluid___srcWebp'
  | 'image___childImageSharp___fluid___srcSetWebp'
  | 'image___childImageSharp___fluid___sizes'
  | 'image___childImageSharp___fluid___originalImg'
  | 'image___childImageSharp___fluid___originalName'
  | 'image___childImageSharp___fluid___presentationWidth'
  | 'image___childImageSharp___fluid___presentationHeight'
  | 'image___childImageSharp___gatsbyImageData'
  | 'image___childImageSharp___original___width'
  | 'image___childImageSharp___original___height'
  | 'image___childImageSharp___original___src'
  | 'image___childImageSharp___resize___src'
  | 'image___childImageSharp___resize___tracedSVG'
  | 'image___childImageSharp___resize___width'
  | 'image___childImageSharp___resize___height'
  | 'image___childImageSharp___resize___aspectRatio'
  | 'image___childImageSharp___resize___originalName'
  | 'image___childImageSharp___id'
  | 'image___childImageSharp___parent___id'
  | 'image___childImageSharp___parent___children'
  | 'image___childImageSharp___children'
  | 'image___childImageSharp___children___id'
  | 'image___childImageSharp___children___children'
  | 'image___childImageSharp___internal___content'
  | 'image___childImageSharp___internal___contentDigest'
  | 'image___childImageSharp___internal___description'
  | 'image___childImageSharp___internal___fieldOwners'
  | 'image___childImageSharp___internal___ignoreType'
  | 'image___childImageSharp___internal___mediaType'
  | 'image___childImageSharp___internal___owner'
  | 'image___childImageSharp___internal___type'
  | 'image___childrenProjectsJson'
  | 'image___childrenProjectsJson___fields___slug'
  | 'image___childrenProjectsJson___image___sourceInstanceName'
  | 'image___childrenProjectsJson___image___absolutePath'
  | 'image___childrenProjectsJson___image___relativePath'
  | 'image___childrenProjectsJson___image___extension'
  | 'image___childrenProjectsJson___image___size'
  | 'image___childrenProjectsJson___image___prettySize'
  | 'image___childrenProjectsJson___image___modifiedTime'
  | 'image___childrenProjectsJson___image___accessTime'
  | 'image___childrenProjectsJson___image___changeTime'
  | 'image___childrenProjectsJson___image___birthTime'
  | 'image___childrenProjectsJson___image___root'
  | 'image___childrenProjectsJson___image___dir'
  | 'image___childrenProjectsJson___image___base'
  | 'image___childrenProjectsJson___image___ext'
  | 'image___childrenProjectsJson___image___name'
  | 'image___childrenProjectsJson___image___relativeDirectory'
  | 'image___childrenProjectsJson___image___dev'
  | 'image___childrenProjectsJson___image___mode'
  | 'image___childrenProjectsJson___image___nlink'
  | 'image___childrenProjectsJson___image___uid'
  | 'image___childrenProjectsJson___image___gid'
  | 'image___childrenProjectsJson___image___rdev'
  | 'image___childrenProjectsJson___image___ino'
  | 'image___childrenProjectsJson___image___atimeMs'
  | 'image___childrenProjectsJson___image___mtimeMs'
  | 'image___childrenProjectsJson___image___ctimeMs'
  | 'image___childrenProjectsJson___image___atime'
  | 'image___childrenProjectsJson___image___mtime'
  | 'image___childrenProjectsJson___image___ctime'
  | 'image___childrenProjectsJson___image___birthtime'
  | 'image___childrenProjectsJson___image___birthtimeMs'
  | 'image___childrenProjectsJson___image___blksize'
  | 'image___childrenProjectsJson___image___blocks'
  | 'image___childrenProjectsJson___image___publicURL'
  | 'image___childrenProjectsJson___image___childrenImageSharp'
  | 'image___childrenProjectsJson___image___childrenProjectsJson'
  | 'image___childrenProjectsJson___image___childrenHeroJson'
  | 'image___childrenProjectsJson___image___childrenAboutJson'
  | 'image___childrenProjectsJson___image___childrenContactJson'
  | 'image___childrenProjectsJson___image___id'
  | 'image___childrenProjectsJson___image___children'
  | 'image___childrenProjectsJson___title'
  | 'image___childrenProjectsJson___body'
  | 'image___childrenProjectsJson___heroImage___label'
  | 'image___childrenProjectsJson___heroImage___alt'
  | 'image___childrenProjectsJson___heroImage___id'
  | 'image___childrenProjectsJson___heroImage___children'
  | 'image___childrenProjectsJson___seo___title'
  | 'image___childrenProjectsJson___seo___description'
  | 'image___childrenProjectsJson___technologies'
  | 'image___childrenProjectsJson___languages'
  | 'image___childrenProjectsJson___gatsbyPath'
  | 'image___childrenProjectsJson___id'
  | 'image___childrenProjectsJson___parent___id'
  | 'image___childrenProjectsJson___parent___children'
  | 'image___childrenProjectsJson___children'
  | 'image___childrenProjectsJson___children___id'
  | 'image___childrenProjectsJson___children___children'
  | 'image___childrenProjectsJson___internal___content'
  | 'image___childrenProjectsJson___internal___contentDigest'
  | 'image___childrenProjectsJson___internal___description'
  | 'image___childrenProjectsJson___internal___fieldOwners'
  | 'image___childrenProjectsJson___internal___ignoreType'
  | 'image___childrenProjectsJson___internal___mediaType'
  | 'image___childrenProjectsJson___internal___owner'
  | 'image___childrenProjectsJson___internal___type'
  | 'image___childProjectsJson___fields___slug'
  | 'image___childProjectsJson___image___sourceInstanceName'
  | 'image___childProjectsJson___image___absolutePath'
  | 'image___childProjectsJson___image___relativePath'
  | 'image___childProjectsJson___image___extension'
  | 'image___childProjectsJson___image___size'
  | 'image___childProjectsJson___image___prettySize'
  | 'image___childProjectsJson___image___modifiedTime'
  | 'image___childProjectsJson___image___accessTime'
  | 'image___childProjectsJson___image___changeTime'
  | 'image___childProjectsJson___image___birthTime'
  | 'image___childProjectsJson___image___root'
  | 'image___childProjectsJson___image___dir'
  | 'image___childProjectsJson___image___base'
  | 'image___childProjectsJson___image___ext'
  | 'image___childProjectsJson___image___name'
  | 'image___childProjectsJson___image___relativeDirectory'
  | 'image___childProjectsJson___image___dev'
  | 'image___childProjectsJson___image___mode'
  | 'image___childProjectsJson___image___nlink'
  | 'image___childProjectsJson___image___uid'
  | 'image___childProjectsJson___image___gid'
  | 'image___childProjectsJson___image___rdev'
  | 'image___childProjectsJson___image___ino'
  | 'image___childProjectsJson___image___atimeMs'
  | 'image___childProjectsJson___image___mtimeMs'
  | 'image___childProjectsJson___image___ctimeMs'
  | 'image___childProjectsJson___image___atime'
  | 'image___childProjectsJson___image___mtime'
  | 'image___childProjectsJson___image___ctime'
  | 'image___childProjectsJson___image___birthtime'
  | 'image___childProjectsJson___image___birthtimeMs'
  | 'image___childProjectsJson___image___blksize'
  | 'image___childProjectsJson___image___blocks'
  | 'image___childProjectsJson___image___publicURL'
  | 'image___childProjectsJson___image___childrenImageSharp'
  | 'image___childProjectsJson___image___childrenProjectsJson'
  | 'image___childProjectsJson___image___childrenHeroJson'
  | 'image___childProjectsJson___image___childrenAboutJson'
  | 'image___childProjectsJson___image___childrenContactJson'
  | 'image___childProjectsJson___image___id'
  | 'image___childProjectsJson___image___children'
  | 'image___childProjectsJson___title'
  | 'image___childProjectsJson___body'
  | 'image___childProjectsJson___heroImage___label'
  | 'image___childProjectsJson___heroImage___alt'
  | 'image___childProjectsJson___heroImage___id'
  | 'image___childProjectsJson___heroImage___children'
  | 'image___childProjectsJson___seo___title'
  | 'image___childProjectsJson___seo___description'
  | 'image___childProjectsJson___technologies'
  | 'image___childProjectsJson___languages'
  | 'image___childProjectsJson___gatsbyPath'
  | 'image___childProjectsJson___id'
  | 'image___childProjectsJson___parent___id'
  | 'image___childProjectsJson___parent___children'
  | 'image___childProjectsJson___children'
  | 'image___childProjectsJson___children___id'
  | 'image___childProjectsJson___children___children'
  | 'image___childProjectsJson___internal___content'
  | 'image___childProjectsJson___internal___contentDigest'
  | 'image___childProjectsJson___internal___description'
  | 'image___childProjectsJson___internal___fieldOwners'
  | 'image___childProjectsJson___internal___ignoreType'
  | 'image___childProjectsJson___internal___mediaType'
  | 'image___childProjectsJson___internal___owner'
  | 'image___childProjectsJson___internal___type'
  | 'image___childrenHeroJson'
  | 'image___childrenHeroJson___fields___slug'
  | 'image___childrenHeroJson___title'
  | 'image___childrenHeroJson___heroImage___label'
  | 'image___childrenHeroJson___heroImage___alt'
  | 'image___childrenHeroJson___heroImage___id'
  | 'image___childrenHeroJson___heroImage___children'
  | 'image___childrenHeroJson___seo___title'
  | 'image___childrenHeroJson___seo___description'
  | 'image___childrenHeroJson___CTA___label'
  | 'image___childrenHeroJson___CTA___url'
  | 'image___childrenHeroJson___id'
  | 'image___childrenHeroJson___parent___id'
  | 'image___childrenHeroJson___parent___children'
  | 'image___childrenHeroJson___children'
  | 'image___childrenHeroJson___children___id'
  | 'image___childrenHeroJson___children___children'
  | 'image___childrenHeroJson___internal___content'
  | 'image___childrenHeroJson___internal___contentDigest'
  | 'image___childrenHeroJson___internal___description'
  | 'image___childrenHeroJson___internal___fieldOwners'
  | 'image___childrenHeroJson___internal___ignoreType'
  | 'image___childrenHeroJson___internal___mediaType'
  | 'image___childrenHeroJson___internal___owner'
  | 'image___childrenHeroJson___internal___type'
  | 'image___childHeroJson___fields___slug'
  | 'image___childHeroJson___title'
  | 'image___childHeroJson___heroImage___label'
  | 'image___childHeroJson___heroImage___alt'
  | 'image___childHeroJson___heroImage___id'
  | 'image___childHeroJson___heroImage___children'
  | 'image___childHeroJson___seo___title'
  | 'image___childHeroJson___seo___description'
  | 'image___childHeroJson___CTA___label'
  | 'image___childHeroJson___CTA___url'
  | 'image___childHeroJson___id'
  | 'image___childHeroJson___parent___id'
  | 'image___childHeroJson___parent___children'
  | 'image___childHeroJson___children'
  | 'image___childHeroJson___children___id'
  | 'image___childHeroJson___children___children'
  | 'image___childHeroJson___internal___content'
  | 'image___childHeroJson___internal___contentDigest'
  | 'image___childHeroJson___internal___description'
  | 'image___childHeroJson___internal___fieldOwners'
  | 'image___childHeroJson___internal___ignoreType'
  | 'image___childHeroJson___internal___mediaType'
  | 'image___childHeroJson___internal___owner'
  | 'image___childHeroJson___internal___type'
  | 'image___childrenAboutJson'
  | 'image___childrenAboutJson___fields___slug'
  | 'image___childrenAboutJson___title'
  | 'image___childrenAboutJson___body'
  | 'image___childrenAboutJson___languages'
  | 'image___childrenAboutJson___technologies'
  | 'image___childrenAboutJson___id'
  | 'image___childrenAboutJson___parent___id'
  | 'image___childrenAboutJson___parent___children'
  | 'image___childrenAboutJson___children'
  | 'image___childrenAboutJson___children___id'
  | 'image___childrenAboutJson___children___children'
  | 'image___childrenAboutJson___internal___content'
  | 'image___childrenAboutJson___internal___contentDigest'
  | 'image___childrenAboutJson___internal___description'
  | 'image___childrenAboutJson___internal___fieldOwners'
  | 'image___childrenAboutJson___internal___ignoreType'
  | 'image___childrenAboutJson___internal___mediaType'
  | 'image___childrenAboutJson___internal___owner'
  | 'image___childrenAboutJson___internal___type'
  | 'image___childAboutJson___fields___slug'
  | 'image___childAboutJson___title'
  | 'image___childAboutJson___body'
  | 'image___childAboutJson___languages'
  | 'image___childAboutJson___technologies'
  | 'image___childAboutJson___id'
  | 'image___childAboutJson___parent___id'
  | 'image___childAboutJson___parent___children'
  | 'image___childAboutJson___children'
  | 'image___childAboutJson___children___id'
  | 'image___childAboutJson___children___children'
  | 'image___childAboutJson___internal___content'
  | 'image___childAboutJson___internal___contentDigest'
  | 'image___childAboutJson___internal___description'
  | 'image___childAboutJson___internal___fieldOwners'
  | 'image___childAboutJson___internal___ignoreType'
  | 'image___childAboutJson___internal___mediaType'
  | 'image___childAboutJson___internal___owner'
  | 'image___childAboutJson___internal___type'
  | 'image___childrenContactJson'
  | 'image___childrenContactJson___fields___slug'
  | 'image___childrenContactJson___title'
  | 'image___childrenContactJson___body'
  | 'image___childrenContactJson___id'
  | 'image___childrenContactJson___parent___id'
  | 'image___childrenContactJson___parent___children'
  | 'image___childrenContactJson___children'
  | 'image___childrenContactJson___children___id'
  | 'image___childrenContactJson___children___children'
  | 'image___childrenContactJson___internal___content'
  | 'image___childrenContactJson___internal___contentDigest'
  | 'image___childrenContactJson___internal___description'
  | 'image___childrenContactJson___internal___fieldOwners'
  | 'image___childrenContactJson___internal___ignoreType'
  | 'image___childrenContactJson___internal___mediaType'
  | 'image___childrenContactJson___internal___owner'
  | 'image___childrenContactJson___internal___type'
  | 'image___childContactJson___fields___slug'
  | 'image___childContactJson___title'
  | 'image___childContactJson___body'
  | 'image___childContactJson___id'
  | 'image___childContactJson___parent___id'
  | 'image___childContactJson___parent___children'
  | 'image___childContactJson___children'
  | 'image___childContactJson___children___id'
  | 'image___childContactJson___children___children'
  | 'image___childContactJson___internal___content'
  | 'image___childContactJson___internal___contentDigest'
  | 'image___childContactJson___internal___description'
  | 'image___childContactJson___internal___fieldOwners'
  | 'image___childContactJson___internal___ignoreType'
  | 'image___childContactJson___internal___mediaType'
  | 'image___childContactJson___internal___owner'
  | 'image___childContactJson___internal___type'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'title'
  | 'body'
  | 'heroImage___data___sourceInstanceName'
  | 'heroImage___data___absolutePath'
  | 'heroImage___data___relativePath'
  | 'heroImage___data___extension'
  | 'heroImage___data___size'
  | 'heroImage___data___prettySize'
  | 'heroImage___data___modifiedTime'
  | 'heroImage___data___accessTime'
  | 'heroImage___data___changeTime'
  | 'heroImage___data___birthTime'
  | 'heroImage___data___root'
  | 'heroImage___data___dir'
  | 'heroImage___data___base'
  | 'heroImage___data___ext'
  | 'heroImage___data___name'
  | 'heroImage___data___relativeDirectory'
  | 'heroImage___data___dev'
  | 'heroImage___data___mode'
  | 'heroImage___data___nlink'
  | 'heroImage___data___uid'
  | 'heroImage___data___gid'
  | 'heroImage___data___rdev'
  | 'heroImage___data___ino'
  | 'heroImage___data___atimeMs'
  | 'heroImage___data___mtimeMs'
  | 'heroImage___data___ctimeMs'
  | 'heroImage___data___atime'
  | 'heroImage___data___mtime'
  | 'heroImage___data___ctime'
  | 'heroImage___data___birthtime'
  | 'heroImage___data___birthtimeMs'
  | 'heroImage___data___blksize'
  | 'heroImage___data___blocks'
  | 'heroImage___data___publicURL'
  | 'heroImage___data___childrenImageSharp'
  | 'heroImage___data___childrenImageSharp___gatsbyImageData'
  | 'heroImage___data___childrenImageSharp___id'
  | 'heroImage___data___childrenImageSharp___children'
  | 'heroImage___data___childImageSharp___gatsbyImageData'
  | 'heroImage___data___childImageSharp___id'
  | 'heroImage___data___childImageSharp___children'
  | 'heroImage___data___childrenProjectsJson'
  | 'heroImage___data___childrenProjectsJson___title'
  | 'heroImage___data___childrenProjectsJson___body'
  | 'heroImage___data___childrenProjectsJson___technologies'
  | 'heroImage___data___childrenProjectsJson___languages'
  | 'heroImage___data___childrenProjectsJson___gatsbyPath'
  | 'heroImage___data___childrenProjectsJson___id'
  | 'heroImage___data___childrenProjectsJson___children'
  | 'heroImage___data___childProjectsJson___title'
  | 'heroImage___data___childProjectsJson___body'
  | 'heroImage___data___childProjectsJson___technologies'
  | 'heroImage___data___childProjectsJson___languages'
  | 'heroImage___data___childProjectsJson___gatsbyPath'
  | 'heroImage___data___childProjectsJson___id'
  | 'heroImage___data___childProjectsJson___children'
  | 'heroImage___data___childrenHeroJson'
  | 'heroImage___data___childrenHeroJson___title'
  | 'heroImage___data___childrenHeroJson___id'
  | 'heroImage___data___childrenHeroJson___children'
  | 'heroImage___data___childHeroJson___title'
  | 'heroImage___data___childHeroJson___id'
  | 'heroImage___data___childHeroJson___children'
  | 'heroImage___data___childrenAboutJson'
  | 'heroImage___data___childrenAboutJson___title'
  | 'heroImage___data___childrenAboutJson___body'
  | 'heroImage___data___childrenAboutJson___languages'
  | 'heroImage___data___childrenAboutJson___technologies'
  | 'heroImage___data___childrenAboutJson___id'
  | 'heroImage___data___childrenAboutJson___children'
  | 'heroImage___data___childAboutJson___title'
  | 'heroImage___data___childAboutJson___body'
  | 'heroImage___data___childAboutJson___languages'
  | 'heroImage___data___childAboutJson___technologies'
  | 'heroImage___data___childAboutJson___id'
  | 'heroImage___data___childAboutJson___children'
  | 'heroImage___data___childrenContactJson'
  | 'heroImage___data___childrenContactJson___title'
  | 'heroImage___data___childrenContactJson___body'
  | 'heroImage___data___childrenContactJson___id'
  | 'heroImage___data___childrenContactJson___children'
  | 'heroImage___data___childContactJson___title'
  | 'heroImage___data___childContactJson___body'
  | 'heroImage___data___childContactJson___id'
  | 'heroImage___data___childContactJson___children'
  | 'heroImage___data___id'
  | 'heroImage___data___parent___id'
  | 'heroImage___data___parent___children'
  | 'heroImage___data___children'
  | 'heroImage___data___children___id'
  | 'heroImage___data___children___children'
  | 'heroImage___data___internal___content'
  | 'heroImage___data___internal___contentDigest'
  | 'heroImage___data___internal___description'
  | 'heroImage___data___internal___fieldOwners'
  | 'heroImage___data___internal___ignoreType'
  | 'heroImage___data___internal___mediaType'
  | 'heroImage___data___internal___owner'
  | 'heroImage___data___internal___type'
  | 'heroImage___label'
  | 'heroImage___alt'
  | 'heroImage___id'
  | 'heroImage___parent___id'
  | 'heroImage___parent___parent___id'
  | 'heroImage___parent___parent___children'
  | 'heroImage___parent___children'
  | 'heroImage___parent___children___id'
  | 'heroImage___parent___children___children'
  | 'heroImage___parent___internal___content'
  | 'heroImage___parent___internal___contentDigest'
  | 'heroImage___parent___internal___description'
  | 'heroImage___parent___internal___fieldOwners'
  | 'heroImage___parent___internal___ignoreType'
  | 'heroImage___parent___internal___mediaType'
  | 'heroImage___parent___internal___owner'
  | 'heroImage___parent___internal___type'
  | 'heroImage___children'
  | 'heroImage___children___id'
  | 'heroImage___children___parent___id'
  | 'heroImage___children___parent___children'
  | 'heroImage___children___children'
  | 'heroImage___children___children___id'
  | 'heroImage___children___children___children'
  | 'heroImage___children___internal___content'
  | 'heroImage___children___internal___contentDigest'
  | 'heroImage___children___internal___description'
  | 'heroImage___children___internal___fieldOwners'
  | 'heroImage___children___internal___ignoreType'
  | 'heroImage___children___internal___mediaType'
  | 'heroImage___children___internal___owner'
  | 'heroImage___children___internal___type'
  | 'heroImage___internal___content'
  | 'heroImage___internal___contentDigest'
  | 'heroImage___internal___description'
  | 'heroImage___internal___fieldOwners'
  | 'heroImage___internal___ignoreType'
  | 'heroImage___internal___mediaType'
  | 'heroImage___internal___owner'
  | 'heroImage___internal___type'
  | 'seo___title'
  | 'seo___image___data___sourceInstanceName'
  | 'seo___image___data___absolutePath'
  | 'seo___image___data___relativePath'
  | 'seo___image___data___extension'
  | 'seo___image___data___size'
  | 'seo___image___data___prettySize'
  | 'seo___image___data___modifiedTime'
  | 'seo___image___data___accessTime'
  | 'seo___image___data___changeTime'
  | 'seo___image___data___birthTime'
  | 'seo___image___data___root'
  | 'seo___image___data___dir'
  | 'seo___image___data___base'
  | 'seo___image___data___ext'
  | 'seo___image___data___name'
  | 'seo___image___data___relativeDirectory'
  | 'seo___image___data___dev'
  | 'seo___image___data___mode'
  | 'seo___image___data___nlink'
  | 'seo___image___data___uid'
  | 'seo___image___data___gid'
  | 'seo___image___data___rdev'
  | 'seo___image___data___ino'
  | 'seo___image___data___atimeMs'
  | 'seo___image___data___mtimeMs'
  | 'seo___image___data___ctimeMs'
  | 'seo___image___data___atime'
  | 'seo___image___data___mtime'
  | 'seo___image___data___ctime'
  | 'seo___image___data___birthtime'
  | 'seo___image___data___birthtimeMs'
  | 'seo___image___data___blksize'
  | 'seo___image___data___blocks'
  | 'seo___image___data___publicURL'
  | 'seo___image___data___childrenImageSharp'
  | 'seo___image___data___childrenProjectsJson'
  | 'seo___image___data___childrenHeroJson'
  | 'seo___image___data___childrenAboutJson'
  | 'seo___image___data___childrenContactJson'
  | 'seo___image___data___id'
  | 'seo___image___data___children'
  | 'seo___image___alt'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___description'
  | 'technologies'
  | 'languages'
  | 'gatsbyPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ProjectsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonEdge>;
  nodes: Array<ProjectsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ProjectsJsonSortInput = {
  fields?: Maybe<Array<Maybe<ProjectsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ProjectsJsonHeroImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonHeroImageEdge>;
  nodes: Array<ProjectsJsonHeroImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProjectsJsonHeroImageGroupConnection>;
};


export type ProjectsJsonHeroImageConnectionDistinctArgs = {
  field: ProjectsJsonHeroImageFieldsEnum;
};


export type ProjectsJsonHeroImageConnectionMaxArgs = {
  field: ProjectsJsonHeroImageFieldsEnum;
};


export type ProjectsJsonHeroImageConnectionMinArgs = {
  field: ProjectsJsonHeroImageFieldsEnum;
};


export type ProjectsJsonHeroImageConnectionSumArgs = {
  field: ProjectsJsonHeroImageFieldsEnum;
};


export type ProjectsJsonHeroImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectsJsonHeroImageFieldsEnum;
};

export type ProjectsJsonHeroImageEdge = {
  next?: Maybe<ProjectsJsonHeroImage>;
  node: ProjectsJsonHeroImage;
  previous?: Maybe<ProjectsJsonHeroImage>;
};

export type ProjectsJsonHeroImageFieldsEnum =
  | 'data___sourceInstanceName'
  | 'data___absolutePath'
  | 'data___relativePath'
  | 'data___extension'
  | 'data___size'
  | 'data___prettySize'
  | 'data___modifiedTime'
  | 'data___accessTime'
  | 'data___changeTime'
  | 'data___birthTime'
  | 'data___root'
  | 'data___dir'
  | 'data___base'
  | 'data___ext'
  | 'data___name'
  | 'data___relativeDirectory'
  | 'data___dev'
  | 'data___mode'
  | 'data___nlink'
  | 'data___uid'
  | 'data___gid'
  | 'data___rdev'
  | 'data___ino'
  | 'data___atimeMs'
  | 'data___mtimeMs'
  | 'data___ctimeMs'
  | 'data___atime'
  | 'data___mtime'
  | 'data___ctime'
  | 'data___birthtime'
  | 'data___birthtimeMs'
  | 'data___blksize'
  | 'data___blocks'
  | 'data___publicURL'
  | 'data___childrenImageSharp'
  | 'data___childrenImageSharp___fixed___base64'
  | 'data___childrenImageSharp___fixed___tracedSVG'
  | 'data___childrenImageSharp___fixed___aspectRatio'
  | 'data___childrenImageSharp___fixed___width'
  | 'data___childrenImageSharp___fixed___height'
  | 'data___childrenImageSharp___fixed___src'
  | 'data___childrenImageSharp___fixed___srcSet'
  | 'data___childrenImageSharp___fixed___srcWebp'
  | 'data___childrenImageSharp___fixed___srcSetWebp'
  | 'data___childrenImageSharp___fixed___originalName'
  | 'data___childrenImageSharp___fluid___base64'
  | 'data___childrenImageSharp___fluid___tracedSVG'
  | 'data___childrenImageSharp___fluid___aspectRatio'
  | 'data___childrenImageSharp___fluid___src'
  | 'data___childrenImageSharp___fluid___srcSet'
  | 'data___childrenImageSharp___fluid___srcWebp'
  | 'data___childrenImageSharp___fluid___srcSetWebp'
  | 'data___childrenImageSharp___fluid___sizes'
  | 'data___childrenImageSharp___fluid___originalImg'
  | 'data___childrenImageSharp___fluid___originalName'
  | 'data___childrenImageSharp___fluid___presentationWidth'
  | 'data___childrenImageSharp___fluid___presentationHeight'
  | 'data___childrenImageSharp___gatsbyImageData'
  | 'data___childrenImageSharp___original___width'
  | 'data___childrenImageSharp___original___height'
  | 'data___childrenImageSharp___original___src'
  | 'data___childrenImageSharp___resize___src'
  | 'data___childrenImageSharp___resize___tracedSVG'
  | 'data___childrenImageSharp___resize___width'
  | 'data___childrenImageSharp___resize___height'
  | 'data___childrenImageSharp___resize___aspectRatio'
  | 'data___childrenImageSharp___resize___originalName'
  | 'data___childrenImageSharp___id'
  | 'data___childrenImageSharp___parent___id'
  | 'data___childrenImageSharp___parent___children'
  | 'data___childrenImageSharp___children'
  | 'data___childrenImageSharp___children___id'
  | 'data___childrenImageSharp___children___children'
  | 'data___childrenImageSharp___internal___content'
  | 'data___childrenImageSharp___internal___contentDigest'
  | 'data___childrenImageSharp___internal___description'
  | 'data___childrenImageSharp___internal___fieldOwners'
  | 'data___childrenImageSharp___internal___ignoreType'
  | 'data___childrenImageSharp___internal___mediaType'
  | 'data___childrenImageSharp___internal___owner'
  | 'data___childrenImageSharp___internal___type'
  | 'data___childImageSharp___fixed___base64'
  | 'data___childImageSharp___fixed___tracedSVG'
  | 'data___childImageSharp___fixed___aspectRatio'
  | 'data___childImageSharp___fixed___width'
  | 'data___childImageSharp___fixed___height'
  | 'data___childImageSharp___fixed___src'
  | 'data___childImageSharp___fixed___srcSet'
  | 'data___childImageSharp___fixed___srcWebp'
  | 'data___childImageSharp___fixed___srcSetWebp'
  | 'data___childImageSharp___fixed___originalName'
  | 'data___childImageSharp___fluid___base64'
  | 'data___childImageSharp___fluid___tracedSVG'
  | 'data___childImageSharp___fluid___aspectRatio'
  | 'data___childImageSharp___fluid___src'
  | 'data___childImageSharp___fluid___srcSet'
  | 'data___childImageSharp___fluid___srcWebp'
  | 'data___childImageSharp___fluid___srcSetWebp'
  | 'data___childImageSharp___fluid___sizes'
  | 'data___childImageSharp___fluid___originalImg'
  | 'data___childImageSharp___fluid___originalName'
  | 'data___childImageSharp___fluid___presentationWidth'
  | 'data___childImageSharp___fluid___presentationHeight'
  | 'data___childImageSharp___gatsbyImageData'
  | 'data___childImageSharp___original___width'
  | 'data___childImageSharp___original___height'
  | 'data___childImageSharp___original___src'
  | 'data___childImageSharp___resize___src'
  | 'data___childImageSharp___resize___tracedSVG'
  | 'data___childImageSharp___resize___width'
  | 'data___childImageSharp___resize___height'
  | 'data___childImageSharp___resize___aspectRatio'
  | 'data___childImageSharp___resize___originalName'
  | 'data___childImageSharp___id'
  | 'data___childImageSharp___parent___id'
  | 'data___childImageSharp___parent___children'
  | 'data___childImageSharp___children'
  | 'data___childImageSharp___children___id'
  | 'data___childImageSharp___children___children'
  | 'data___childImageSharp___internal___content'
  | 'data___childImageSharp___internal___contentDigest'
  | 'data___childImageSharp___internal___description'
  | 'data___childImageSharp___internal___fieldOwners'
  | 'data___childImageSharp___internal___ignoreType'
  | 'data___childImageSharp___internal___mediaType'
  | 'data___childImageSharp___internal___owner'
  | 'data___childImageSharp___internal___type'
  | 'data___childrenProjectsJson'
  | 'data___childrenProjectsJson___fields___slug'
  | 'data___childrenProjectsJson___image___sourceInstanceName'
  | 'data___childrenProjectsJson___image___absolutePath'
  | 'data___childrenProjectsJson___image___relativePath'
  | 'data___childrenProjectsJson___image___extension'
  | 'data___childrenProjectsJson___image___size'
  | 'data___childrenProjectsJson___image___prettySize'
  | 'data___childrenProjectsJson___image___modifiedTime'
  | 'data___childrenProjectsJson___image___accessTime'
  | 'data___childrenProjectsJson___image___changeTime'
  | 'data___childrenProjectsJson___image___birthTime'
  | 'data___childrenProjectsJson___image___root'
  | 'data___childrenProjectsJson___image___dir'
  | 'data___childrenProjectsJson___image___base'
  | 'data___childrenProjectsJson___image___ext'
  | 'data___childrenProjectsJson___image___name'
  | 'data___childrenProjectsJson___image___relativeDirectory'
  | 'data___childrenProjectsJson___image___dev'
  | 'data___childrenProjectsJson___image___mode'
  | 'data___childrenProjectsJson___image___nlink'
  | 'data___childrenProjectsJson___image___uid'
  | 'data___childrenProjectsJson___image___gid'
  | 'data___childrenProjectsJson___image___rdev'
  | 'data___childrenProjectsJson___image___ino'
  | 'data___childrenProjectsJson___image___atimeMs'
  | 'data___childrenProjectsJson___image___mtimeMs'
  | 'data___childrenProjectsJson___image___ctimeMs'
  | 'data___childrenProjectsJson___image___atime'
  | 'data___childrenProjectsJson___image___mtime'
  | 'data___childrenProjectsJson___image___ctime'
  | 'data___childrenProjectsJson___image___birthtime'
  | 'data___childrenProjectsJson___image___birthtimeMs'
  | 'data___childrenProjectsJson___image___blksize'
  | 'data___childrenProjectsJson___image___blocks'
  | 'data___childrenProjectsJson___image___publicURL'
  | 'data___childrenProjectsJson___image___childrenImageSharp'
  | 'data___childrenProjectsJson___image___childrenProjectsJson'
  | 'data___childrenProjectsJson___image___childrenHeroJson'
  | 'data___childrenProjectsJson___image___childrenAboutJson'
  | 'data___childrenProjectsJson___image___childrenContactJson'
  | 'data___childrenProjectsJson___image___id'
  | 'data___childrenProjectsJson___image___children'
  | 'data___childrenProjectsJson___title'
  | 'data___childrenProjectsJson___body'
  | 'data___childrenProjectsJson___heroImage___label'
  | 'data___childrenProjectsJson___heroImage___alt'
  | 'data___childrenProjectsJson___heroImage___id'
  | 'data___childrenProjectsJson___heroImage___children'
  | 'data___childrenProjectsJson___seo___title'
  | 'data___childrenProjectsJson___seo___description'
  | 'data___childrenProjectsJson___technologies'
  | 'data___childrenProjectsJson___languages'
  | 'data___childrenProjectsJson___gatsbyPath'
  | 'data___childrenProjectsJson___id'
  | 'data___childrenProjectsJson___parent___id'
  | 'data___childrenProjectsJson___parent___children'
  | 'data___childrenProjectsJson___children'
  | 'data___childrenProjectsJson___children___id'
  | 'data___childrenProjectsJson___children___children'
  | 'data___childrenProjectsJson___internal___content'
  | 'data___childrenProjectsJson___internal___contentDigest'
  | 'data___childrenProjectsJson___internal___description'
  | 'data___childrenProjectsJson___internal___fieldOwners'
  | 'data___childrenProjectsJson___internal___ignoreType'
  | 'data___childrenProjectsJson___internal___mediaType'
  | 'data___childrenProjectsJson___internal___owner'
  | 'data___childrenProjectsJson___internal___type'
  | 'data___childProjectsJson___fields___slug'
  | 'data___childProjectsJson___image___sourceInstanceName'
  | 'data___childProjectsJson___image___absolutePath'
  | 'data___childProjectsJson___image___relativePath'
  | 'data___childProjectsJson___image___extension'
  | 'data___childProjectsJson___image___size'
  | 'data___childProjectsJson___image___prettySize'
  | 'data___childProjectsJson___image___modifiedTime'
  | 'data___childProjectsJson___image___accessTime'
  | 'data___childProjectsJson___image___changeTime'
  | 'data___childProjectsJson___image___birthTime'
  | 'data___childProjectsJson___image___root'
  | 'data___childProjectsJson___image___dir'
  | 'data___childProjectsJson___image___base'
  | 'data___childProjectsJson___image___ext'
  | 'data___childProjectsJson___image___name'
  | 'data___childProjectsJson___image___relativeDirectory'
  | 'data___childProjectsJson___image___dev'
  | 'data___childProjectsJson___image___mode'
  | 'data___childProjectsJson___image___nlink'
  | 'data___childProjectsJson___image___uid'
  | 'data___childProjectsJson___image___gid'
  | 'data___childProjectsJson___image___rdev'
  | 'data___childProjectsJson___image___ino'
  | 'data___childProjectsJson___image___atimeMs'
  | 'data___childProjectsJson___image___mtimeMs'
  | 'data___childProjectsJson___image___ctimeMs'
  | 'data___childProjectsJson___image___atime'
  | 'data___childProjectsJson___image___mtime'
  | 'data___childProjectsJson___image___ctime'
  | 'data___childProjectsJson___image___birthtime'
  | 'data___childProjectsJson___image___birthtimeMs'
  | 'data___childProjectsJson___image___blksize'
  | 'data___childProjectsJson___image___blocks'
  | 'data___childProjectsJson___image___publicURL'
  | 'data___childProjectsJson___image___childrenImageSharp'
  | 'data___childProjectsJson___image___childrenProjectsJson'
  | 'data___childProjectsJson___image___childrenHeroJson'
  | 'data___childProjectsJson___image___childrenAboutJson'
  | 'data___childProjectsJson___image___childrenContactJson'
  | 'data___childProjectsJson___image___id'
  | 'data___childProjectsJson___image___children'
  | 'data___childProjectsJson___title'
  | 'data___childProjectsJson___body'
  | 'data___childProjectsJson___heroImage___label'
  | 'data___childProjectsJson___heroImage___alt'
  | 'data___childProjectsJson___heroImage___id'
  | 'data___childProjectsJson___heroImage___children'
  | 'data___childProjectsJson___seo___title'
  | 'data___childProjectsJson___seo___description'
  | 'data___childProjectsJson___technologies'
  | 'data___childProjectsJson___languages'
  | 'data___childProjectsJson___gatsbyPath'
  | 'data___childProjectsJson___id'
  | 'data___childProjectsJson___parent___id'
  | 'data___childProjectsJson___parent___children'
  | 'data___childProjectsJson___children'
  | 'data___childProjectsJson___children___id'
  | 'data___childProjectsJson___children___children'
  | 'data___childProjectsJson___internal___content'
  | 'data___childProjectsJson___internal___contentDigest'
  | 'data___childProjectsJson___internal___description'
  | 'data___childProjectsJson___internal___fieldOwners'
  | 'data___childProjectsJson___internal___ignoreType'
  | 'data___childProjectsJson___internal___mediaType'
  | 'data___childProjectsJson___internal___owner'
  | 'data___childProjectsJson___internal___type'
  | 'data___childrenHeroJson'
  | 'data___childrenHeroJson___fields___slug'
  | 'data___childrenHeroJson___title'
  | 'data___childrenHeroJson___heroImage___label'
  | 'data___childrenHeroJson___heroImage___alt'
  | 'data___childrenHeroJson___heroImage___id'
  | 'data___childrenHeroJson___heroImage___children'
  | 'data___childrenHeroJson___seo___title'
  | 'data___childrenHeroJson___seo___description'
  | 'data___childrenHeroJson___CTA___label'
  | 'data___childrenHeroJson___CTA___url'
  | 'data___childrenHeroJson___id'
  | 'data___childrenHeroJson___parent___id'
  | 'data___childrenHeroJson___parent___children'
  | 'data___childrenHeroJson___children'
  | 'data___childrenHeroJson___children___id'
  | 'data___childrenHeroJson___children___children'
  | 'data___childrenHeroJson___internal___content'
  | 'data___childrenHeroJson___internal___contentDigest'
  | 'data___childrenHeroJson___internal___description'
  | 'data___childrenHeroJson___internal___fieldOwners'
  | 'data___childrenHeroJson___internal___ignoreType'
  | 'data___childrenHeroJson___internal___mediaType'
  | 'data___childrenHeroJson___internal___owner'
  | 'data___childrenHeroJson___internal___type'
  | 'data___childHeroJson___fields___slug'
  | 'data___childHeroJson___title'
  | 'data___childHeroJson___heroImage___label'
  | 'data___childHeroJson___heroImage___alt'
  | 'data___childHeroJson___heroImage___id'
  | 'data___childHeroJson___heroImage___children'
  | 'data___childHeroJson___seo___title'
  | 'data___childHeroJson___seo___description'
  | 'data___childHeroJson___CTA___label'
  | 'data___childHeroJson___CTA___url'
  | 'data___childHeroJson___id'
  | 'data___childHeroJson___parent___id'
  | 'data___childHeroJson___parent___children'
  | 'data___childHeroJson___children'
  | 'data___childHeroJson___children___id'
  | 'data___childHeroJson___children___children'
  | 'data___childHeroJson___internal___content'
  | 'data___childHeroJson___internal___contentDigest'
  | 'data___childHeroJson___internal___description'
  | 'data___childHeroJson___internal___fieldOwners'
  | 'data___childHeroJson___internal___ignoreType'
  | 'data___childHeroJson___internal___mediaType'
  | 'data___childHeroJson___internal___owner'
  | 'data___childHeroJson___internal___type'
  | 'data___childrenAboutJson'
  | 'data___childrenAboutJson___fields___slug'
  | 'data___childrenAboutJson___title'
  | 'data___childrenAboutJson___body'
  | 'data___childrenAboutJson___languages'
  | 'data___childrenAboutJson___technologies'
  | 'data___childrenAboutJson___id'
  | 'data___childrenAboutJson___parent___id'
  | 'data___childrenAboutJson___parent___children'
  | 'data___childrenAboutJson___children'
  | 'data___childrenAboutJson___children___id'
  | 'data___childrenAboutJson___children___children'
  | 'data___childrenAboutJson___internal___content'
  | 'data___childrenAboutJson___internal___contentDigest'
  | 'data___childrenAboutJson___internal___description'
  | 'data___childrenAboutJson___internal___fieldOwners'
  | 'data___childrenAboutJson___internal___ignoreType'
  | 'data___childrenAboutJson___internal___mediaType'
  | 'data___childrenAboutJson___internal___owner'
  | 'data___childrenAboutJson___internal___type'
  | 'data___childAboutJson___fields___slug'
  | 'data___childAboutJson___title'
  | 'data___childAboutJson___body'
  | 'data___childAboutJson___languages'
  | 'data___childAboutJson___technologies'
  | 'data___childAboutJson___id'
  | 'data___childAboutJson___parent___id'
  | 'data___childAboutJson___parent___children'
  | 'data___childAboutJson___children'
  | 'data___childAboutJson___children___id'
  | 'data___childAboutJson___children___children'
  | 'data___childAboutJson___internal___content'
  | 'data___childAboutJson___internal___contentDigest'
  | 'data___childAboutJson___internal___description'
  | 'data___childAboutJson___internal___fieldOwners'
  | 'data___childAboutJson___internal___ignoreType'
  | 'data___childAboutJson___internal___mediaType'
  | 'data___childAboutJson___internal___owner'
  | 'data___childAboutJson___internal___type'
  | 'data___childrenContactJson'
  | 'data___childrenContactJson___fields___slug'
  | 'data___childrenContactJson___title'
  | 'data___childrenContactJson___body'
  | 'data___childrenContactJson___id'
  | 'data___childrenContactJson___parent___id'
  | 'data___childrenContactJson___parent___children'
  | 'data___childrenContactJson___children'
  | 'data___childrenContactJson___children___id'
  | 'data___childrenContactJson___children___children'
  | 'data___childrenContactJson___internal___content'
  | 'data___childrenContactJson___internal___contentDigest'
  | 'data___childrenContactJson___internal___description'
  | 'data___childrenContactJson___internal___fieldOwners'
  | 'data___childrenContactJson___internal___ignoreType'
  | 'data___childrenContactJson___internal___mediaType'
  | 'data___childrenContactJson___internal___owner'
  | 'data___childrenContactJson___internal___type'
  | 'data___childContactJson___fields___slug'
  | 'data___childContactJson___title'
  | 'data___childContactJson___body'
  | 'data___childContactJson___id'
  | 'data___childContactJson___parent___id'
  | 'data___childContactJson___parent___children'
  | 'data___childContactJson___children'
  | 'data___childContactJson___children___id'
  | 'data___childContactJson___children___children'
  | 'data___childContactJson___internal___content'
  | 'data___childContactJson___internal___contentDigest'
  | 'data___childContactJson___internal___description'
  | 'data___childContactJson___internal___fieldOwners'
  | 'data___childContactJson___internal___ignoreType'
  | 'data___childContactJson___internal___mediaType'
  | 'data___childContactJson___internal___owner'
  | 'data___childContactJson___internal___type'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'label'
  | 'alt'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ProjectsJsonHeroImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonHeroImageEdge>;
  nodes: Array<ProjectsJsonHeroImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ProjectsJsonHeroImageSortInput = {
  fields?: Maybe<Array<Maybe<ProjectsJsonHeroImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ProjectsJsonSeoImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonSeoImageEdge>;
  nodes: Array<ProjectsJsonSeoImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ProjectsJsonSeoImageGroupConnection>;
};


export type ProjectsJsonSeoImageConnectionDistinctArgs = {
  field: ProjectsJsonSeoImageFieldsEnum;
};


export type ProjectsJsonSeoImageConnectionMaxArgs = {
  field: ProjectsJsonSeoImageFieldsEnum;
};


export type ProjectsJsonSeoImageConnectionMinArgs = {
  field: ProjectsJsonSeoImageFieldsEnum;
};


export type ProjectsJsonSeoImageConnectionSumArgs = {
  field: ProjectsJsonSeoImageFieldsEnum;
};


export type ProjectsJsonSeoImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ProjectsJsonSeoImageFieldsEnum;
};

export type ProjectsJsonSeoImageEdge = {
  next?: Maybe<ProjectsJsonSeoImage>;
  node: ProjectsJsonSeoImage;
  previous?: Maybe<ProjectsJsonSeoImage>;
};

export type ProjectsJsonSeoImageFieldsEnum =
  | 'data___sourceInstanceName'
  | 'data___absolutePath'
  | 'data___relativePath'
  | 'data___extension'
  | 'data___size'
  | 'data___prettySize'
  | 'data___modifiedTime'
  | 'data___accessTime'
  | 'data___changeTime'
  | 'data___birthTime'
  | 'data___root'
  | 'data___dir'
  | 'data___base'
  | 'data___ext'
  | 'data___name'
  | 'data___relativeDirectory'
  | 'data___dev'
  | 'data___mode'
  | 'data___nlink'
  | 'data___uid'
  | 'data___gid'
  | 'data___rdev'
  | 'data___ino'
  | 'data___atimeMs'
  | 'data___mtimeMs'
  | 'data___ctimeMs'
  | 'data___atime'
  | 'data___mtime'
  | 'data___ctime'
  | 'data___birthtime'
  | 'data___birthtimeMs'
  | 'data___blksize'
  | 'data___blocks'
  | 'data___publicURL'
  | 'data___childrenImageSharp'
  | 'data___childrenImageSharp___fixed___base64'
  | 'data___childrenImageSharp___fixed___tracedSVG'
  | 'data___childrenImageSharp___fixed___aspectRatio'
  | 'data___childrenImageSharp___fixed___width'
  | 'data___childrenImageSharp___fixed___height'
  | 'data___childrenImageSharp___fixed___src'
  | 'data___childrenImageSharp___fixed___srcSet'
  | 'data___childrenImageSharp___fixed___srcWebp'
  | 'data___childrenImageSharp___fixed___srcSetWebp'
  | 'data___childrenImageSharp___fixed___originalName'
  | 'data___childrenImageSharp___fluid___base64'
  | 'data___childrenImageSharp___fluid___tracedSVG'
  | 'data___childrenImageSharp___fluid___aspectRatio'
  | 'data___childrenImageSharp___fluid___src'
  | 'data___childrenImageSharp___fluid___srcSet'
  | 'data___childrenImageSharp___fluid___srcWebp'
  | 'data___childrenImageSharp___fluid___srcSetWebp'
  | 'data___childrenImageSharp___fluid___sizes'
  | 'data___childrenImageSharp___fluid___originalImg'
  | 'data___childrenImageSharp___fluid___originalName'
  | 'data___childrenImageSharp___fluid___presentationWidth'
  | 'data___childrenImageSharp___fluid___presentationHeight'
  | 'data___childrenImageSharp___gatsbyImageData'
  | 'data___childrenImageSharp___original___width'
  | 'data___childrenImageSharp___original___height'
  | 'data___childrenImageSharp___original___src'
  | 'data___childrenImageSharp___resize___src'
  | 'data___childrenImageSharp___resize___tracedSVG'
  | 'data___childrenImageSharp___resize___width'
  | 'data___childrenImageSharp___resize___height'
  | 'data___childrenImageSharp___resize___aspectRatio'
  | 'data___childrenImageSharp___resize___originalName'
  | 'data___childrenImageSharp___id'
  | 'data___childrenImageSharp___parent___id'
  | 'data___childrenImageSharp___parent___children'
  | 'data___childrenImageSharp___children'
  | 'data___childrenImageSharp___children___id'
  | 'data___childrenImageSharp___children___children'
  | 'data___childrenImageSharp___internal___content'
  | 'data___childrenImageSharp___internal___contentDigest'
  | 'data___childrenImageSharp___internal___description'
  | 'data___childrenImageSharp___internal___fieldOwners'
  | 'data___childrenImageSharp___internal___ignoreType'
  | 'data___childrenImageSharp___internal___mediaType'
  | 'data___childrenImageSharp___internal___owner'
  | 'data___childrenImageSharp___internal___type'
  | 'data___childImageSharp___fixed___base64'
  | 'data___childImageSharp___fixed___tracedSVG'
  | 'data___childImageSharp___fixed___aspectRatio'
  | 'data___childImageSharp___fixed___width'
  | 'data___childImageSharp___fixed___height'
  | 'data___childImageSharp___fixed___src'
  | 'data___childImageSharp___fixed___srcSet'
  | 'data___childImageSharp___fixed___srcWebp'
  | 'data___childImageSharp___fixed___srcSetWebp'
  | 'data___childImageSharp___fixed___originalName'
  | 'data___childImageSharp___fluid___base64'
  | 'data___childImageSharp___fluid___tracedSVG'
  | 'data___childImageSharp___fluid___aspectRatio'
  | 'data___childImageSharp___fluid___src'
  | 'data___childImageSharp___fluid___srcSet'
  | 'data___childImageSharp___fluid___srcWebp'
  | 'data___childImageSharp___fluid___srcSetWebp'
  | 'data___childImageSharp___fluid___sizes'
  | 'data___childImageSharp___fluid___originalImg'
  | 'data___childImageSharp___fluid___originalName'
  | 'data___childImageSharp___fluid___presentationWidth'
  | 'data___childImageSharp___fluid___presentationHeight'
  | 'data___childImageSharp___gatsbyImageData'
  | 'data___childImageSharp___original___width'
  | 'data___childImageSharp___original___height'
  | 'data___childImageSharp___original___src'
  | 'data___childImageSharp___resize___src'
  | 'data___childImageSharp___resize___tracedSVG'
  | 'data___childImageSharp___resize___width'
  | 'data___childImageSharp___resize___height'
  | 'data___childImageSharp___resize___aspectRatio'
  | 'data___childImageSharp___resize___originalName'
  | 'data___childImageSharp___id'
  | 'data___childImageSharp___parent___id'
  | 'data___childImageSharp___parent___children'
  | 'data___childImageSharp___children'
  | 'data___childImageSharp___children___id'
  | 'data___childImageSharp___children___children'
  | 'data___childImageSharp___internal___content'
  | 'data___childImageSharp___internal___contentDigest'
  | 'data___childImageSharp___internal___description'
  | 'data___childImageSharp___internal___fieldOwners'
  | 'data___childImageSharp___internal___ignoreType'
  | 'data___childImageSharp___internal___mediaType'
  | 'data___childImageSharp___internal___owner'
  | 'data___childImageSharp___internal___type'
  | 'data___childrenProjectsJson'
  | 'data___childrenProjectsJson___fields___slug'
  | 'data___childrenProjectsJson___image___sourceInstanceName'
  | 'data___childrenProjectsJson___image___absolutePath'
  | 'data___childrenProjectsJson___image___relativePath'
  | 'data___childrenProjectsJson___image___extension'
  | 'data___childrenProjectsJson___image___size'
  | 'data___childrenProjectsJson___image___prettySize'
  | 'data___childrenProjectsJson___image___modifiedTime'
  | 'data___childrenProjectsJson___image___accessTime'
  | 'data___childrenProjectsJson___image___changeTime'
  | 'data___childrenProjectsJson___image___birthTime'
  | 'data___childrenProjectsJson___image___root'
  | 'data___childrenProjectsJson___image___dir'
  | 'data___childrenProjectsJson___image___base'
  | 'data___childrenProjectsJson___image___ext'
  | 'data___childrenProjectsJson___image___name'
  | 'data___childrenProjectsJson___image___relativeDirectory'
  | 'data___childrenProjectsJson___image___dev'
  | 'data___childrenProjectsJson___image___mode'
  | 'data___childrenProjectsJson___image___nlink'
  | 'data___childrenProjectsJson___image___uid'
  | 'data___childrenProjectsJson___image___gid'
  | 'data___childrenProjectsJson___image___rdev'
  | 'data___childrenProjectsJson___image___ino'
  | 'data___childrenProjectsJson___image___atimeMs'
  | 'data___childrenProjectsJson___image___mtimeMs'
  | 'data___childrenProjectsJson___image___ctimeMs'
  | 'data___childrenProjectsJson___image___atime'
  | 'data___childrenProjectsJson___image___mtime'
  | 'data___childrenProjectsJson___image___ctime'
  | 'data___childrenProjectsJson___image___birthtime'
  | 'data___childrenProjectsJson___image___birthtimeMs'
  | 'data___childrenProjectsJson___image___blksize'
  | 'data___childrenProjectsJson___image___blocks'
  | 'data___childrenProjectsJson___image___publicURL'
  | 'data___childrenProjectsJson___image___childrenImageSharp'
  | 'data___childrenProjectsJson___image___childrenProjectsJson'
  | 'data___childrenProjectsJson___image___childrenHeroJson'
  | 'data___childrenProjectsJson___image___childrenAboutJson'
  | 'data___childrenProjectsJson___image___childrenContactJson'
  | 'data___childrenProjectsJson___image___id'
  | 'data___childrenProjectsJson___image___children'
  | 'data___childrenProjectsJson___title'
  | 'data___childrenProjectsJson___body'
  | 'data___childrenProjectsJson___heroImage___label'
  | 'data___childrenProjectsJson___heroImage___alt'
  | 'data___childrenProjectsJson___heroImage___id'
  | 'data___childrenProjectsJson___heroImage___children'
  | 'data___childrenProjectsJson___seo___title'
  | 'data___childrenProjectsJson___seo___description'
  | 'data___childrenProjectsJson___technologies'
  | 'data___childrenProjectsJson___languages'
  | 'data___childrenProjectsJson___gatsbyPath'
  | 'data___childrenProjectsJson___id'
  | 'data___childrenProjectsJson___parent___id'
  | 'data___childrenProjectsJson___parent___children'
  | 'data___childrenProjectsJson___children'
  | 'data___childrenProjectsJson___children___id'
  | 'data___childrenProjectsJson___children___children'
  | 'data___childrenProjectsJson___internal___content'
  | 'data___childrenProjectsJson___internal___contentDigest'
  | 'data___childrenProjectsJson___internal___description'
  | 'data___childrenProjectsJson___internal___fieldOwners'
  | 'data___childrenProjectsJson___internal___ignoreType'
  | 'data___childrenProjectsJson___internal___mediaType'
  | 'data___childrenProjectsJson___internal___owner'
  | 'data___childrenProjectsJson___internal___type'
  | 'data___childProjectsJson___fields___slug'
  | 'data___childProjectsJson___image___sourceInstanceName'
  | 'data___childProjectsJson___image___absolutePath'
  | 'data___childProjectsJson___image___relativePath'
  | 'data___childProjectsJson___image___extension'
  | 'data___childProjectsJson___image___size'
  | 'data___childProjectsJson___image___prettySize'
  | 'data___childProjectsJson___image___modifiedTime'
  | 'data___childProjectsJson___image___accessTime'
  | 'data___childProjectsJson___image___changeTime'
  | 'data___childProjectsJson___image___birthTime'
  | 'data___childProjectsJson___image___root'
  | 'data___childProjectsJson___image___dir'
  | 'data___childProjectsJson___image___base'
  | 'data___childProjectsJson___image___ext'
  | 'data___childProjectsJson___image___name'
  | 'data___childProjectsJson___image___relativeDirectory'
  | 'data___childProjectsJson___image___dev'
  | 'data___childProjectsJson___image___mode'
  | 'data___childProjectsJson___image___nlink'
  | 'data___childProjectsJson___image___uid'
  | 'data___childProjectsJson___image___gid'
  | 'data___childProjectsJson___image___rdev'
  | 'data___childProjectsJson___image___ino'
  | 'data___childProjectsJson___image___atimeMs'
  | 'data___childProjectsJson___image___mtimeMs'
  | 'data___childProjectsJson___image___ctimeMs'
  | 'data___childProjectsJson___image___atime'
  | 'data___childProjectsJson___image___mtime'
  | 'data___childProjectsJson___image___ctime'
  | 'data___childProjectsJson___image___birthtime'
  | 'data___childProjectsJson___image___birthtimeMs'
  | 'data___childProjectsJson___image___blksize'
  | 'data___childProjectsJson___image___blocks'
  | 'data___childProjectsJson___image___publicURL'
  | 'data___childProjectsJson___image___childrenImageSharp'
  | 'data___childProjectsJson___image___childrenProjectsJson'
  | 'data___childProjectsJson___image___childrenHeroJson'
  | 'data___childProjectsJson___image___childrenAboutJson'
  | 'data___childProjectsJson___image___childrenContactJson'
  | 'data___childProjectsJson___image___id'
  | 'data___childProjectsJson___image___children'
  | 'data___childProjectsJson___title'
  | 'data___childProjectsJson___body'
  | 'data___childProjectsJson___heroImage___label'
  | 'data___childProjectsJson___heroImage___alt'
  | 'data___childProjectsJson___heroImage___id'
  | 'data___childProjectsJson___heroImage___children'
  | 'data___childProjectsJson___seo___title'
  | 'data___childProjectsJson___seo___description'
  | 'data___childProjectsJson___technologies'
  | 'data___childProjectsJson___languages'
  | 'data___childProjectsJson___gatsbyPath'
  | 'data___childProjectsJson___id'
  | 'data___childProjectsJson___parent___id'
  | 'data___childProjectsJson___parent___children'
  | 'data___childProjectsJson___children'
  | 'data___childProjectsJson___children___id'
  | 'data___childProjectsJson___children___children'
  | 'data___childProjectsJson___internal___content'
  | 'data___childProjectsJson___internal___contentDigest'
  | 'data___childProjectsJson___internal___description'
  | 'data___childProjectsJson___internal___fieldOwners'
  | 'data___childProjectsJson___internal___ignoreType'
  | 'data___childProjectsJson___internal___mediaType'
  | 'data___childProjectsJson___internal___owner'
  | 'data___childProjectsJson___internal___type'
  | 'data___childrenHeroJson'
  | 'data___childrenHeroJson___fields___slug'
  | 'data___childrenHeroJson___title'
  | 'data___childrenHeroJson___heroImage___label'
  | 'data___childrenHeroJson___heroImage___alt'
  | 'data___childrenHeroJson___heroImage___id'
  | 'data___childrenHeroJson___heroImage___children'
  | 'data___childrenHeroJson___seo___title'
  | 'data___childrenHeroJson___seo___description'
  | 'data___childrenHeroJson___CTA___label'
  | 'data___childrenHeroJson___CTA___url'
  | 'data___childrenHeroJson___id'
  | 'data___childrenHeroJson___parent___id'
  | 'data___childrenHeroJson___parent___children'
  | 'data___childrenHeroJson___children'
  | 'data___childrenHeroJson___children___id'
  | 'data___childrenHeroJson___children___children'
  | 'data___childrenHeroJson___internal___content'
  | 'data___childrenHeroJson___internal___contentDigest'
  | 'data___childrenHeroJson___internal___description'
  | 'data___childrenHeroJson___internal___fieldOwners'
  | 'data___childrenHeroJson___internal___ignoreType'
  | 'data___childrenHeroJson___internal___mediaType'
  | 'data___childrenHeroJson___internal___owner'
  | 'data___childrenHeroJson___internal___type'
  | 'data___childHeroJson___fields___slug'
  | 'data___childHeroJson___title'
  | 'data___childHeroJson___heroImage___label'
  | 'data___childHeroJson___heroImage___alt'
  | 'data___childHeroJson___heroImage___id'
  | 'data___childHeroJson___heroImage___children'
  | 'data___childHeroJson___seo___title'
  | 'data___childHeroJson___seo___description'
  | 'data___childHeroJson___CTA___label'
  | 'data___childHeroJson___CTA___url'
  | 'data___childHeroJson___id'
  | 'data___childHeroJson___parent___id'
  | 'data___childHeroJson___parent___children'
  | 'data___childHeroJson___children'
  | 'data___childHeroJson___children___id'
  | 'data___childHeroJson___children___children'
  | 'data___childHeroJson___internal___content'
  | 'data___childHeroJson___internal___contentDigest'
  | 'data___childHeroJson___internal___description'
  | 'data___childHeroJson___internal___fieldOwners'
  | 'data___childHeroJson___internal___ignoreType'
  | 'data___childHeroJson___internal___mediaType'
  | 'data___childHeroJson___internal___owner'
  | 'data___childHeroJson___internal___type'
  | 'data___childrenAboutJson'
  | 'data___childrenAboutJson___fields___slug'
  | 'data___childrenAboutJson___title'
  | 'data___childrenAboutJson___body'
  | 'data___childrenAboutJson___languages'
  | 'data___childrenAboutJson___technologies'
  | 'data___childrenAboutJson___id'
  | 'data___childrenAboutJson___parent___id'
  | 'data___childrenAboutJson___parent___children'
  | 'data___childrenAboutJson___children'
  | 'data___childrenAboutJson___children___id'
  | 'data___childrenAboutJson___children___children'
  | 'data___childrenAboutJson___internal___content'
  | 'data___childrenAboutJson___internal___contentDigest'
  | 'data___childrenAboutJson___internal___description'
  | 'data___childrenAboutJson___internal___fieldOwners'
  | 'data___childrenAboutJson___internal___ignoreType'
  | 'data___childrenAboutJson___internal___mediaType'
  | 'data___childrenAboutJson___internal___owner'
  | 'data___childrenAboutJson___internal___type'
  | 'data___childAboutJson___fields___slug'
  | 'data___childAboutJson___title'
  | 'data___childAboutJson___body'
  | 'data___childAboutJson___languages'
  | 'data___childAboutJson___technologies'
  | 'data___childAboutJson___id'
  | 'data___childAboutJson___parent___id'
  | 'data___childAboutJson___parent___children'
  | 'data___childAboutJson___children'
  | 'data___childAboutJson___children___id'
  | 'data___childAboutJson___children___children'
  | 'data___childAboutJson___internal___content'
  | 'data___childAboutJson___internal___contentDigest'
  | 'data___childAboutJson___internal___description'
  | 'data___childAboutJson___internal___fieldOwners'
  | 'data___childAboutJson___internal___ignoreType'
  | 'data___childAboutJson___internal___mediaType'
  | 'data___childAboutJson___internal___owner'
  | 'data___childAboutJson___internal___type'
  | 'data___childrenContactJson'
  | 'data___childrenContactJson___fields___slug'
  | 'data___childrenContactJson___title'
  | 'data___childrenContactJson___body'
  | 'data___childrenContactJson___id'
  | 'data___childrenContactJson___parent___id'
  | 'data___childrenContactJson___parent___children'
  | 'data___childrenContactJson___children'
  | 'data___childrenContactJson___children___id'
  | 'data___childrenContactJson___children___children'
  | 'data___childrenContactJson___internal___content'
  | 'data___childrenContactJson___internal___contentDigest'
  | 'data___childrenContactJson___internal___description'
  | 'data___childrenContactJson___internal___fieldOwners'
  | 'data___childrenContactJson___internal___ignoreType'
  | 'data___childrenContactJson___internal___mediaType'
  | 'data___childrenContactJson___internal___owner'
  | 'data___childrenContactJson___internal___type'
  | 'data___childContactJson___fields___slug'
  | 'data___childContactJson___title'
  | 'data___childContactJson___body'
  | 'data___childContactJson___id'
  | 'data___childContactJson___parent___id'
  | 'data___childContactJson___parent___children'
  | 'data___childContactJson___children'
  | 'data___childContactJson___children___id'
  | 'data___childContactJson___children___children'
  | 'data___childContactJson___internal___content'
  | 'data___childContactJson___internal___contentDigest'
  | 'data___childContactJson___internal___description'
  | 'data___childContactJson___internal___fieldOwners'
  | 'data___childContactJson___internal___ignoreType'
  | 'data___childContactJson___internal___mediaType'
  | 'data___childContactJson___internal___owner'
  | 'data___childContactJson___internal___type'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'alt'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ProjectsJsonSeoImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ProjectsJsonSeoImageEdge>;
  nodes: Array<ProjectsJsonSeoImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ProjectsJsonSeoImageSortInput = {
  fields?: Maybe<Array<Maybe<ProjectsJsonSeoImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type HeroJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HeroJsonEdge>;
  nodes: Array<HeroJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<HeroJsonGroupConnection>;
};


export type HeroJsonConnectionDistinctArgs = {
  field: HeroJsonFieldsEnum;
};


export type HeroJsonConnectionMaxArgs = {
  field: HeroJsonFieldsEnum;
};


export type HeroJsonConnectionMinArgs = {
  field: HeroJsonFieldsEnum;
};


export type HeroJsonConnectionSumArgs = {
  field: HeroJsonFieldsEnum;
};


export type HeroJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: HeroJsonFieldsEnum;
};

export type HeroJsonEdge = {
  next?: Maybe<HeroJson>;
  node: HeroJson;
  previous?: Maybe<HeroJson>;
};

export type HeroJsonFieldsEnum =
  | 'fields___slug'
  | 'title'
  | 'heroImage___data___sourceInstanceName'
  | 'heroImage___data___absolutePath'
  | 'heroImage___data___relativePath'
  | 'heroImage___data___extension'
  | 'heroImage___data___size'
  | 'heroImage___data___prettySize'
  | 'heroImage___data___modifiedTime'
  | 'heroImage___data___accessTime'
  | 'heroImage___data___changeTime'
  | 'heroImage___data___birthTime'
  | 'heroImage___data___root'
  | 'heroImage___data___dir'
  | 'heroImage___data___base'
  | 'heroImage___data___ext'
  | 'heroImage___data___name'
  | 'heroImage___data___relativeDirectory'
  | 'heroImage___data___dev'
  | 'heroImage___data___mode'
  | 'heroImage___data___nlink'
  | 'heroImage___data___uid'
  | 'heroImage___data___gid'
  | 'heroImage___data___rdev'
  | 'heroImage___data___ino'
  | 'heroImage___data___atimeMs'
  | 'heroImage___data___mtimeMs'
  | 'heroImage___data___ctimeMs'
  | 'heroImage___data___atime'
  | 'heroImage___data___mtime'
  | 'heroImage___data___ctime'
  | 'heroImage___data___birthtime'
  | 'heroImage___data___birthtimeMs'
  | 'heroImage___data___blksize'
  | 'heroImage___data___blocks'
  | 'heroImage___data___publicURL'
  | 'heroImage___data___childrenImageSharp'
  | 'heroImage___data___childrenImageSharp___gatsbyImageData'
  | 'heroImage___data___childrenImageSharp___id'
  | 'heroImage___data___childrenImageSharp___children'
  | 'heroImage___data___childImageSharp___gatsbyImageData'
  | 'heroImage___data___childImageSharp___id'
  | 'heroImage___data___childImageSharp___children'
  | 'heroImage___data___childrenProjectsJson'
  | 'heroImage___data___childrenProjectsJson___title'
  | 'heroImage___data___childrenProjectsJson___body'
  | 'heroImage___data___childrenProjectsJson___technologies'
  | 'heroImage___data___childrenProjectsJson___languages'
  | 'heroImage___data___childrenProjectsJson___gatsbyPath'
  | 'heroImage___data___childrenProjectsJson___id'
  | 'heroImage___data___childrenProjectsJson___children'
  | 'heroImage___data___childProjectsJson___title'
  | 'heroImage___data___childProjectsJson___body'
  | 'heroImage___data___childProjectsJson___technologies'
  | 'heroImage___data___childProjectsJson___languages'
  | 'heroImage___data___childProjectsJson___gatsbyPath'
  | 'heroImage___data___childProjectsJson___id'
  | 'heroImage___data___childProjectsJson___children'
  | 'heroImage___data___childrenHeroJson'
  | 'heroImage___data___childrenHeroJson___title'
  | 'heroImage___data___childrenHeroJson___id'
  | 'heroImage___data___childrenHeroJson___children'
  | 'heroImage___data___childHeroJson___title'
  | 'heroImage___data___childHeroJson___id'
  | 'heroImage___data___childHeroJson___children'
  | 'heroImage___data___childrenAboutJson'
  | 'heroImage___data___childrenAboutJson___title'
  | 'heroImage___data___childrenAboutJson___body'
  | 'heroImage___data___childrenAboutJson___languages'
  | 'heroImage___data___childrenAboutJson___technologies'
  | 'heroImage___data___childrenAboutJson___id'
  | 'heroImage___data___childrenAboutJson___children'
  | 'heroImage___data___childAboutJson___title'
  | 'heroImage___data___childAboutJson___body'
  | 'heroImage___data___childAboutJson___languages'
  | 'heroImage___data___childAboutJson___technologies'
  | 'heroImage___data___childAboutJson___id'
  | 'heroImage___data___childAboutJson___children'
  | 'heroImage___data___childrenContactJson'
  | 'heroImage___data___childrenContactJson___title'
  | 'heroImage___data___childrenContactJson___body'
  | 'heroImage___data___childrenContactJson___id'
  | 'heroImage___data___childrenContactJson___children'
  | 'heroImage___data___childContactJson___title'
  | 'heroImage___data___childContactJson___body'
  | 'heroImage___data___childContactJson___id'
  | 'heroImage___data___childContactJson___children'
  | 'heroImage___data___id'
  | 'heroImage___data___parent___id'
  | 'heroImage___data___parent___children'
  | 'heroImage___data___children'
  | 'heroImage___data___children___id'
  | 'heroImage___data___children___children'
  | 'heroImage___data___internal___content'
  | 'heroImage___data___internal___contentDigest'
  | 'heroImage___data___internal___description'
  | 'heroImage___data___internal___fieldOwners'
  | 'heroImage___data___internal___ignoreType'
  | 'heroImage___data___internal___mediaType'
  | 'heroImage___data___internal___owner'
  | 'heroImage___data___internal___type'
  | 'heroImage___label'
  | 'heroImage___alt'
  | 'heroImage___id'
  | 'heroImage___parent___id'
  | 'heroImage___parent___parent___id'
  | 'heroImage___parent___parent___children'
  | 'heroImage___parent___children'
  | 'heroImage___parent___children___id'
  | 'heroImage___parent___children___children'
  | 'heroImage___parent___internal___content'
  | 'heroImage___parent___internal___contentDigest'
  | 'heroImage___parent___internal___description'
  | 'heroImage___parent___internal___fieldOwners'
  | 'heroImage___parent___internal___ignoreType'
  | 'heroImage___parent___internal___mediaType'
  | 'heroImage___parent___internal___owner'
  | 'heroImage___parent___internal___type'
  | 'heroImage___children'
  | 'heroImage___children___id'
  | 'heroImage___children___parent___id'
  | 'heroImage___children___parent___children'
  | 'heroImage___children___children'
  | 'heroImage___children___children___id'
  | 'heroImage___children___children___children'
  | 'heroImage___children___internal___content'
  | 'heroImage___children___internal___contentDigest'
  | 'heroImage___children___internal___description'
  | 'heroImage___children___internal___fieldOwners'
  | 'heroImage___children___internal___ignoreType'
  | 'heroImage___children___internal___mediaType'
  | 'heroImage___children___internal___owner'
  | 'heroImage___children___internal___type'
  | 'heroImage___internal___content'
  | 'heroImage___internal___contentDigest'
  | 'heroImage___internal___description'
  | 'heroImage___internal___fieldOwners'
  | 'heroImage___internal___ignoreType'
  | 'heroImage___internal___mediaType'
  | 'heroImage___internal___owner'
  | 'heroImage___internal___type'
  | 'seo___title'
  | 'seo___image___data___sourceInstanceName'
  | 'seo___image___data___absolutePath'
  | 'seo___image___data___relativePath'
  | 'seo___image___data___extension'
  | 'seo___image___data___size'
  | 'seo___image___data___prettySize'
  | 'seo___image___data___modifiedTime'
  | 'seo___image___data___accessTime'
  | 'seo___image___data___changeTime'
  | 'seo___image___data___birthTime'
  | 'seo___image___data___root'
  | 'seo___image___data___dir'
  | 'seo___image___data___base'
  | 'seo___image___data___ext'
  | 'seo___image___data___name'
  | 'seo___image___data___relativeDirectory'
  | 'seo___image___data___dev'
  | 'seo___image___data___mode'
  | 'seo___image___data___nlink'
  | 'seo___image___data___uid'
  | 'seo___image___data___gid'
  | 'seo___image___data___rdev'
  | 'seo___image___data___ino'
  | 'seo___image___data___atimeMs'
  | 'seo___image___data___mtimeMs'
  | 'seo___image___data___ctimeMs'
  | 'seo___image___data___atime'
  | 'seo___image___data___mtime'
  | 'seo___image___data___ctime'
  | 'seo___image___data___birthtime'
  | 'seo___image___data___birthtimeMs'
  | 'seo___image___data___blksize'
  | 'seo___image___data___blocks'
  | 'seo___image___data___publicURL'
  | 'seo___image___data___childrenImageSharp'
  | 'seo___image___data___childrenProjectsJson'
  | 'seo___image___data___childrenHeroJson'
  | 'seo___image___data___childrenAboutJson'
  | 'seo___image___data___childrenContactJson'
  | 'seo___image___data___id'
  | 'seo___image___data___children'
  | 'seo___image___alt'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___description'
  | 'CTA___label'
  | 'CTA___url'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type HeroJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HeroJsonEdge>;
  nodes: Array<HeroJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type HeroJsonSortInput = {
  fields?: Maybe<Array<Maybe<HeroJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type HeroJsonSeoImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HeroJsonSeoImageEdge>;
  nodes: Array<HeroJsonSeoImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<HeroJsonSeoImageGroupConnection>;
};


export type HeroJsonSeoImageConnectionDistinctArgs = {
  field: HeroJsonSeoImageFieldsEnum;
};


export type HeroJsonSeoImageConnectionMaxArgs = {
  field: HeroJsonSeoImageFieldsEnum;
};


export type HeroJsonSeoImageConnectionMinArgs = {
  field: HeroJsonSeoImageFieldsEnum;
};


export type HeroJsonSeoImageConnectionSumArgs = {
  field: HeroJsonSeoImageFieldsEnum;
};


export type HeroJsonSeoImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: HeroJsonSeoImageFieldsEnum;
};

export type HeroJsonSeoImageEdge = {
  next?: Maybe<HeroJsonSeoImage>;
  node: HeroJsonSeoImage;
  previous?: Maybe<HeroJsonSeoImage>;
};

export type HeroJsonSeoImageFieldsEnum =
  | 'data___sourceInstanceName'
  | 'data___absolutePath'
  | 'data___relativePath'
  | 'data___extension'
  | 'data___size'
  | 'data___prettySize'
  | 'data___modifiedTime'
  | 'data___accessTime'
  | 'data___changeTime'
  | 'data___birthTime'
  | 'data___root'
  | 'data___dir'
  | 'data___base'
  | 'data___ext'
  | 'data___name'
  | 'data___relativeDirectory'
  | 'data___dev'
  | 'data___mode'
  | 'data___nlink'
  | 'data___uid'
  | 'data___gid'
  | 'data___rdev'
  | 'data___ino'
  | 'data___atimeMs'
  | 'data___mtimeMs'
  | 'data___ctimeMs'
  | 'data___atime'
  | 'data___mtime'
  | 'data___ctime'
  | 'data___birthtime'
  | 'data___birthtimeMs'
  | 'data___blksize'
  | 'data___blocks'
  | 'data___publicURL'
  | 'data___childrenImageSharp'
  | 'data___childrenImageSharp___fixed___base64'
  | 'data___childrenImageSharp___fixed___tracedSVG'
  | 'data___childrenImageSharp___fixed___aspectRatio'
  | 'data___childrenImageSharp___fixed___width'
  | 'data___childrenImageSharp___fixed___height'
  | 'data___childrenImageSharp___fixed___src'
  | 'data___childrenImageSharp___fixed___srcSet'
  | 'data___childrenImageSharp___fixed___srcWebp'
  | 'data___childrenImageSharp___fixed___srcSetWebp'
  | 'data___childrenImageSharp___fixed___originalName'
  | 'data___childrenImageSharp___fluid___base64'
  | 'data___childrenImageSharp___fluid___tracedSVG'
  | 'data___childrenImageSharp___fluid___aspectRatio'
  | 'data___childrenImageSharp___fluid___src'
  | 'data___childrenImageSharp___fluid___srcSet'
  | 'data___childrenImageSharp___fluid___srcWebp'
  | 'data___childrenImageSharp___fluid___srcSetWebp'
  | 'data___childrenImageSharp___fluid___sizes'
  | 'data___childrenImageSharp___fluid___originalImg'
  | 'data___childrenImageSharp___fluid___originalName'
  | 'data___childrenImageSharp___fluid___presentationWidth'
  | 'data___childrenImageSharp___fluid___presentationHeight'
  | 'data___childrenImageSharp___gatsbyImageData'
  | 'data___childrenImageSharp___original___width'
  | 'data___childrenImageSharp___original___height'
  | 'data___childrenImageSharp___original___src'
  | 'data___childrenImageSharp___resize___src'
  | 'data___childrenImageSharp___resize___tracedSVG'
  | 'data___childrenImageSharp___resize___width'
  | 'data___childrenImageSharp___resize___height'
  | 'data___childrenImageSharp___resize___aspectRatio'
  | 'data___childrenImageSharp___resize___originalName'
  | 'data___childrenImageSharp___id'
  | 'data___childrenImageSharp___parent___id'
  | 'data___childrenImageSharp___parent___children'
  | 'data___childrenImageSharp___children'
  | 'data___childrenImageSharp___children___id'
  | 'data___childrenImageSharp___children___children'
  | 'data___childrenImageSharp___internal___content'
  | 'data___childrenImageSharp___internal___contentDigest'
  | 'data___childrenImageSharp___internal___description'
  | 'data___childrenImageSharp___internal___fieldOwners'
  | 'data___childrenImageSharp___internal___ignoreType'
  | 'data___childrenImageSharp___internal___mediaType'
  | 'data___childrenImageSharp___internal___owner'
  | 'data___childrenImageSharp___internal___type'
  | 'data___childImageSharp___fixed___base64'
  | 'data___childImageSharp___fixed___tracedSVG'
  | 'data___childImageSharp___fixed___aspectRatio'
  | 'data___childImageSharp___fixed___width'
  | 'data___childImageSharp___fixed___height'
  | 'data___childImageSharp___fixed___src'
  | 'data___childImageSharp___fixed___srcSet'
  | 'data___childImageSharp___fixed___srcWebp'
  | 'data___childImageSharp___fixed___srcSetWebp'
  | 'data___childImageSharp___fixed___originalName'
  | 'data___childImageSharp___fluid___base64'
  | 'data___childImageSharp___fluid___tracedSVG'
  | 'data___childImageSharp___fluid___aspectRatio'
  | 'data___childImageSharp___fluid___src'
  | 'data___childImageSharp___fluid___srcSet'
  | 'data___childImageSharp___fluid___srcWebp'
  | 'data___childImageSharp___fluid___srcSetWebp'
  | 'data___childImageSharp___fluid___sizes'
  | 'data___childImageSharp___fluid___originalImg'
  | 'data___childImageSharp___fluid___originalName'
  | 'data___childImageSharp___fluid___presentationWidth'
  | 'data___childImageSharp___fluid___presentationHeight'
  | 'data___childImageSharp___gatsbyImageData'
  | 'data___childImageSharp___original___width'
  | 'data___childImageSharp___original___height'
  | 'data___childImageSharp___original___src'
  | 'data___childImageSharp___resize___src'
  | 'data___childImageSharp___resize___tracedSVG'
  | 'data___childImageSharp___resize___width'
  | 'data___childImageSharp___resize___height'
  | 'data___childImageSharp___resize___aspectRatio'
  | 'data___childImageSharp___resize___originalName'
  | 'data___childImageSharp___id'
  | 'data___childImageSharp___parent___id'
  | 'data___childImageSharp___parent___children'
  | 'data___childImageSharp___children'
  | 'data___childImageSharp___children___id'
  | 'data___childImageSharp___children___children'
  | 'data___childImageSharp___internal___content'
  | 'data___childImageSharp___internal___contentDigest'
  | 'data___childImageSharp___internal___description'
  | 'data___childImageSharp___internal___fieldOwners'
  | 'data___childImageSharp___internal___ignoreType'
  | 'data___childImageSharp___internal___mediaType'
  | 'data___childImageSharp___internal___owner'
  | 'data___childImageSharp___internal___type'
  | 'data___childrenProjectsJson'
  | 'data___childrenProjectsJson___fields___slug'
  | 'data___childrenProjectsJson___image___sourceInstanceName'
  | 'data___childrenProjectsJson___image___absolutePath'
  | 'data___childrenProjectsJson___image___relativePath'
  | 'data___childrenProjectsJson___image___extension'
  | 'data___childrenProjectsJson___image___size'
  | 'data___childrenProjectsJson___image___prettySize'
  | 'data___childrenProjectsJson___image___modifiedTime'
  | 'data___childrenProjectsJson___image___accessTime'
  | 'data___childrenProjectsJson___image___changeTime'
  | 'data___childrenProjectsJson___image___birthTime'
  | 'data___childrenProjectsJson___image___root'
  | 'data___childrenProjectsJson___image___dir'
  | 'data___childrenProjectsJson___image___base'
  | 'data___childrenProjectsJson___image___ext'
  | 'data___childrenProjectsJson___image___name'
  | 'data___childrenProjectsJson___image___relativeDirectory'
  | 'data___childrenProjectsJson___image___dev'
  | 'data___childrenProjectsJson___image___mode'
  | 'data___childrenProjectsJson___image___nlink'
  | 'data___childrenProjectsJson___image___uid'
  | 'data___childrenProjectsJson___image___gid'
  | 'data___childrenProjectsJson___image___rdev'
  | 'data___childrenProjectsJson___image___ino'
  | 'data___childrenProjectsJson___image___atimeMs'
  | 'data___childrenProjectsJson___image___mtimeMs'
  | 'data___childrenProjectsJson___image___ctimeMs'
  | 'data___childrenProjectsJson___image___atime'
  | 'data___childrenProjectsJson___image___mtime'
  | 'data___childrenProjectsJson___image___ctime'
  | 'data___childrenProjectsJson___image___birthtime'
  | 'data___childrenProjectsJson___image___birthtimeMs'
  | 'data___childrenProjectsJson___image___blksize'
  | 'data___childrenProjectsJson___image___blocks'
  | 'data___childrenProjectsJson___image___publicURL'
  | 'data___childrenProjectsJson___image___childrenImageSharp'
  | 'data___childrenProjectsJson___image___childrenProjectsJson'
  | 'data___childrenProjectsJson___image___childrenHeroJson'
  | 'data___childrenProjectsJson___image___childrenAboutJson'
  | 'data___childrenProjectsJson___image___childrenContactJson'
  | 'data___childrenProjectsJson___image___id'
  | 'data___childrenProjectsJson___image___children'
  | 'data___childrenProjectsJson___title'
  | 'data___childrenProjectsJson___body'
  | 'data___childrenProjectsJson___heroImage___label'
  | 'data___childrenProjectsJson___heroImage___alt'
  | 'data___childrenProjectsJson___heroImage___id'
  | 'data___childrenProjectsJson___heroImage___children'
  | 'data___childrenProjectsJson___seo___title'
  | 'data___childrenProjectsJson___seo___description'
  | 'data___childrenProjectsJson___technologies'
  | 'data___childrenProjectsJson___languages'
  | 'data___childrenProjectsJson___gatsbyPath'
  | 'data___childrenProjectsJson___id'
  | 'data___childrenProjectsJson___parent___id'
  | 'data___childrenProjectsJson___parent___children'
  | 'data___childrenProjectsJson___children'
  | 'data___childrenProjectsJson___children___id'
  | 'data___childrenProjectsJson___children___children'
  | 'data___childrenProjectsJson___internal___content'
  | 'data___childrenProjectsJson___internal___contentDigest'
  | 'data___childrenProjectsJson___internal___description'
  | 'data___childrenProjectsJson___internal___fieldOwners'
  | 'data___childrenProjectsJson___internal___ignoreType'
  | 'data___childrenProjectsJson___internal___mediaType'
  | 'data___childrenProjectsJson___internal___owner'
  | 'data___childrenProjectsJson___internal___type'
  | 'data___childProjectsJson___fields___slug'
  | 'data___childProjectsJson___image___sourceInstanceName'
  | 'data___childProjectsJson___image___absolutePath'
  | 'data___childProjectsJson___image___relativePath'
  | 'data___childProjectsJson___image___extension'
  | 'data___childProjectsJson___image___size'
  | 'data___childProjectsJson___image___prettySize'
  | 'data___childProjectsJson___image___modifiedTime'
  | 'data___childProjectsJson___image___accessTime'
  | 'data___childProjectsJson___image___changeTime'
  | 'data___childProjectsJson___image___birthTime'
  | 'data___childProjectsJson___image___root'
  | 'data___childProjectsJson___image___dir'
  | 'data___childProjectsJson___image___base'
  | 'data___childProjectsJson___image___ext'
  | 'data___childProjectsJson___image___name'
  | 'data___childProjectsJson___image___relativeDirectory'
  | 'data___childProjectsJson___image___dev'
  | 'data___childProjectsJson___image___mode'
  | 'data___childProjectsJson___image___nlink'
  | 'data___childProjectsJson___image___uid'
  | 'data___childProjectsJson___image___gid'
  | 'data___childProjectsJson___image___rdev'
  | 'data___childProjectsJson___image___ino'
  | 'data___childProjectsJson___image___atimeMs'
  | 'data___childProjectsJson___image___mtimeMs'
  | 'data___childProjectsJson___image___ctimeMs'
  | 'data___childProjectsJson___image___atime'
  | 'data___childProjectsJson___image___mtime'
  | 'data___childProjectsJson___image___ctime'
  | 'data___childProjectsJson___image___birthtime'
  | 'data___childProjectsJson___image___birthtimeMs'
  | 'data___childProjectsJson___image___blksize'
  | 'data___childProjectsJson___image___blocks'
  | 'data___childProjectsJson___image___publicURL'
  | 'data___childProjectsJson___image___childrenImageSharp'
  | 'data___childProjectsJson___image___childrenProjectsJson'
  | 'data___childProjectsJson___image___childrenHeroJson'
  | 'data___childProjectsJson___image___childrenAboutJson'
  | 'data___childProjectsJson___image___childrenContactJson'
  | 'data___childProjectsJson___image___id'
  | 'data___childProjectsJson___image___children'
  | 'data___childProjectsJson___title'
  | 'data___childProjectsJson___body'
  | 'data___childProjectsJson___heroImage___label'
  | 'data___childProjectsJson___heroImage___alt'
  | 'data___childProjectsJson___heroImage___id'
  | 'data___childProjectsJson___heroImage___children'
  | 'data___childProjectsJson___seo___title'
  | 'data___childProjectsJson___seo___description'
  | 'data___childProjectsJson___technologies'
  | 'data___childProjectsJson___languages'
  | 'data___childProjectsJson___gatsbyPath'
  | 'data___childProjectsJson___id'
  | 'data___childProjectsJson___parent___id'
  | 'data___childProjectsJson___parent___children'
  | 'data___childProjectsJson___children'
  | 'data___childProjectsJson___children___id'
  | 'data___childProjectsJson___children___children'
  | 'data___childProjectsJson___internal___content'
  | 'data___childProjectsJson___internal___contentDigest'
  | 'data___childProjectsJson___internal___description'
  | 'data___childProjectsJson___internal___fieldOwners'
  | 'data___childProjectsJson___internal___ignoreType'
  | 'data___childProjectsJson___internal___mediaType'
  | 'data___childProjectsJson___internal___owner'
  | 'data___childProjectsJson___internal___type'
  | 'data___childrenHeroJson'
  | 'data___childrenHeroJson___fields___slug'
  | 'data___childrenHeroJson___title'
  | 'data___childrenHeroJson___heroImage___label'
  | 'data___childrenHeroJson___heroImage___alt'
  | 'data___childrenHeroJson___heroImage___id'
  | 'data___childrenHeroJson___heroImage___children'
  | 'data___childrenHeroJson___seo___title'
  | 'data___childrenHeroJson___seo___description'
  | 'data___childrenHeroJson___CTA___label'
  | 'data___childrenHeroJson___CTA___url'
  | 'data___childrenHeroJson___id'
  | 'data___childrenHeroJson___parent___id'
  | 'data___childrenHeroJson___parent___children'
  | 'data___childrenHeroJson___children'
  | 'data___childrenHeroJson___children___id'
  | 'data___childrenHeroJson___children___children'
  | 'data___childrenHeroJson___internal___content'
  | 'data___childrenHeroJson___internal___contentDigest'
  | 'data___childrenHeroJson___internal___description'
  | 'data___childrenHeroJson___internal___fieldOwners'
  | 'data___childrenHeroJson___internal___ignoreType'
  | 'data___childrenHeroJson___internal___mediaType'
  | 'data___childrenHeroJson___internal___owner'
  | 'data___childrenHeroJson___internal___type'
  | 'data___childHeroJson___fields___slug'
  | 'data___childHeroJson___title'
  | 'data___childHeroJson___heroImage___label'
  | 'data___childHeroJson___heroImage___alt'
  | 'data___childHeroJson___heroImage___id'
  | 'data___childHeroJson___heroImage___children'
  | 'data___childHeroJson___seo___title'
  | 'data___childHeroJson___seo___description'
  | 'data___childHeroJson___CTA___label'
  | 'data___childHeroJson___CTA___url'
  | 'data___childHeroJson___id'
  | 'data___childHeroJson___parent___id'
  | 'data___childHeroJson___parent___children'
  | 'data___childHeroJson___children'
  | 'data___childHeroJson___children___id'
  | 'data___childHeroJson___children___children'
  | 'data___childHeroJson___internal___content'
  | 'data___childHeroJson___internal___contentDigest'
  | 'data___childHeroJson___internal___description'
  | 'data___childHeroJson___internal___fieldOwners'
  | 'data___childHeroJson___internal___ignoreType'
  | 'data___childHeroJson___internal___mediaType'
  | 'data___childHeroJson___internal___owner'
  | 'data___childHeroJson___internal___type'
  | 'data___childrenAboutJson'
  | 'data___childrenAboutJson___fields___slug'
  | 'data___childrenAboutJson___title'
  | 'data___childrenAboutJson___body'
  | 'data___childrenAboutJson___languages'
  | 'data___childrenAboutJson___technologies'
  | 'data___childrenAboutJson___id'
  | 'data___childrenAboutJson___parent___id'
  | 'data___childrenAboutJson___parent___children'
  | 'data___childrenAboutJson___children'
  | 'data___childrenAboutJson___children___id'
  | 'data___childrenAboutJson___children___children'
  | 'data___childrenAboutJson___internal___content'
  | 'data___childrenAboutJson___internal___contentDigest'
  | 'data___childrenAboutJson___internal___description'
  | 'data___childrenAboutJson___internal___fieldOwners'
  | 'data___childrenAboutJson___internal___ignoreType'
  | 'data___childrenAboutJson___internal___mediaType'
  | 'data___childrenAboutJson___internal___owner'
  | 'data___childrenAboutJson___internal___type'
  | 'data___childAboutJson___fields___slug'
  | 'data___childAboutJson___title'
  | 'data___childAboutJson___body'
  | 'data___childAboutJson___languages'
  | 'data___childAboutJson___technologies'
  | 'data___childAboutJson___id'
  | 'data___childAboutJson___parent___id'
  | 'data___childAboutJson___parent___children'
  | 'data___childAboutJson___children'
  | 'data___childAboutJson___children___id'
  | 'data___childAboutJson___children___children'
  | 'data___childAboutJson___internal___content'
  | 'data___childAboutJson___internal___contentDigest'
  | 'data___childAboutJson___internal___description'
  | 'data___childAboutJson___internal___fieldOwners'
  | 'data___childAboutJson___internal___ignoreType'
  | 'data___childAboutJson___internal___mediaType'
  | 'data___childAboutJson___internal___owner'
  | 'data___childAboutJson___internal___type'
  | 'data___childrenContactJson'
  | 'data___childrenContactJson___fields___slug'
  | 'data___childrenContactJson___title'
  | 'data___childrenContactJson___body'
  | 'data___childrenContactJson___id'
  | 'data___childrenContactJson___parent___id'
  | 'data___childrenContactJson___parent___children'
  | 'data___childrenContactJson___children'
  | 'data___childrenContactJson___children___id'
  | 'data___childrenContactJson___children___children'
  | 'data___childrenContactJson___internal___content'
  | 'data___childrenContactJson___internal___contentDigest'
  | 'data___childrenContactJson___internal___description'
  | 'data___childrenContactJson___internal___fieldOwners'
  | 'data___childrenContactJson___internal___ignoreType'
  | 'data___childrenContactJson___internal___mediaType'
  | 'data___childrenContactJson___internal___owner'
  | 'data___childrenContactJson___internal___type'
  | 'data___childContactJson___fields___slug'
  | 'data___childContactJson___title'
  | 'data___childContactJson___body'
  | 'data___childContactJson___id'
  | 'data___childContactJson___parent___id'
  | 'data___childContactJson___parent___children'
  | 'data___childContactJson___children'
  | 'data___childContactJson___children___id'
  | 'data___childContactJson___children___children'
  | 'data___childContactJson___internal___content'
  | 'data___childContactJson___internal___contentDigest'
  | 'data___childContactJson___internal___description'
  | 'data___childContactJson___internal___fieldOwners'
  | 'data___childContactJson___internal___ignoreType'
  | 'data___childContactJson___internal___mediaType'
  | 'data___childContactJson___internal___owner'
  | 'data___childContactJson___internal___type'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'alt'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type HeroJsonSeoImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HeroJsonSeoImageEdge>;
  nodes: Array<HeroJsonSeoImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type HeroJsonSeoImageSortInput = {
  fields?: Maybe<Array<Maybe<HeroJsonSeoImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type HeroJsonHeroImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HeroJsonHeroImageEdge>;
  nodes: Array<HeroJsonHeroImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<HeroJsonHeroImageGroupConnection>;
};


export type HeroJsonHeroImageConnectionDistinctArgs = {
  field: HeroJsonHeroImageFieldsEnum;
};


export type HeroJsonHeroImageConnectionMaxArgs = {
  field: HeroJsonHeroImageFieldsEnum;
};


export type HeroJsonHeroImageConnectionMinArgs = {
  field: HeroJsonHeroImageFieldsEnum;
};


export type HeroJsonHeroImageConnectionSumArgs = {
  field: HeroJsonHeroImageFieldsEnum;
};


export type HeroJsonHeroImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: HeroJsonHeroImageFieldsEnum;
};

export type HeroJsonHeroImageEdge = {
  next?: Maybe<HeroJsonHeroImage>;
  node: HeroJsonHeroImage;
  previous?: Maybe<HeroJsonHeroImage>;
};

export type HeroJsonHeroImageFieldsEnum =
  | 'data___sourceInstanceName'
  | 'data___absolutePath'
  | 'data___relativePath'
  | 'data___extension'
  | 'data___size'
  | 'data___prettySize'
  | 'data___modifiedTime'
  | 'data___accessTime'
  | 'data___changeTime'
  | 'data___birthTime'
  | 'data___root'
  | 'data___dir'
  | 'data___base'
  | 'data___ext'
  | 'data___name'
  | 'data___relativeDirectory'
  | 'data___dev'
  | 'data___mode'
  | 'data___nlink'
  | 'data___uid'
  | 'data___gid'
  | 'data___rdev'
  | 'data___ino'
  | 'data___atimeMs'
  | 'data___mtimeMs'
  | 'data___ctimeMs'
  | 'data___atime'
  | 'data___mtime'
  | 'data___ctime'
  | 'data___birthtime'
  | 'data___birthtimeMs'
  | 'data___blksize'
  | 'data___blocks'
  | 'data___publicURL'
  | 'data___childrenImageSharp'
  | 'data___childrenImageSharp___fixed___base64'
  | 'data___childrenImageSharp___fixed___tracedSVG'
  | 'data___childrenImageSharp___fixed___aspectRatio'
  | 'data___childrenImageSharp___fixed___width'
  | 'data___childrenImageSharp___fixed___height'
  | 'data___childrenImageSharp___fixed___src'
  | 'data___childrenImageSharp___fixed___srcSet'
  | 'data___childrenImageSharp___fixed___srcWebp'
  | 'data___childrenImageSharp___fixed___srcSetWebp'
  | 'data___childrenImageSharp___fixed___originalName'
  | 'data___childrenImageSharp___fluid___base64'
  | 'data___childrenImageSharp___fluid___tracedSVG'
  | 'data___childrenImageSharp___fluid___aspectRatio'
  | 'data___childrenImageSharp___fluid___src'
  | 'data___childrenImageSharp___fluid___srcSet'
  | 'data___childrenImageSharp___fluid___srcWebp'
  | 'data___childrenImageSharp___fluid___srcSetWebp'
  | 'data___childrenImageSharp___fluid___sizes'
  | 'data___childrenImageSharp___fluid___originalImg'
  | 'data___childrenImageSharp___fluid___originalName'
  | 'data___childrenImageSharp___fluid___presentationWidth'
  | 'data___childrenImageSharp___fluid___presentationHeight'
  | 'data___childrenImageSharp___gatsbyImageData'
  | 'data___childrenImageSharp___original___width'
  | 'data___childrenImageSharp___original___height'
  | 'data___childrenImageSharp___original___src'
  | 'data___childrenImageSharp___resize___src'
  | 'data___childrenImageSharp___resize___tracedSVG'
  | 'data___childrenImageSharp___resize___width'
  | 'data___childrenImageSharp___resize___height'
  | 'data___childrenImageSharp___resize___aspectRatio'
  | 'data___childrenImageSharp___resize___originalName'
  | 'data___childrenImageSharp___id'
  | 'data___childrenImageSharp___parent___id'
  | 'data___childrenImageSharp___parent___children'
  | 'data___childrenImageSharp___children'
  | 'data___childrenImageSharp___children___id'
  | 'data___childrenImageSharp___children___children'
  | 'data___childrenImageSharp___internal___content'
  | 'data___childrenImageSharp___internal___contentDigest'
  | 'data___childrenImageSharp___internal___description'
  | 'data___childrenImageSharp___internal___fieldOwners'
  | 'data___childrenImageSharp___internal___ignoreType'
  | 'data___childrenImageSharp___internal___mediaType'
  | 'data___childrenImageSharp___internal___owner'
  | 'data___childrenImageSharp___internal___type'
  | 'data___childImageSharp___fixed___base64'
  | 'data___childImageSharp___fixed___tracedSVG'
  | 'data___childImageSharp___fixed___aspectRatio'
  | 'data___childImageSharp___fixed___width'
  | 'data___childImageSharp___fixed___height'
  | 'data___childImageSharp___fixed___src'
  | 'data___childImageSharp___fixed___srcSet'
  | 'data___childImageSharp___fixed___srcWebp'
  | 'data___childImageSharp___fixed___srcSetWebp'
  | 'data___childImageSharp___fixed___originalName'
  | 'data___childImageSharp___fluid___base64'
  | 'data___childImageSharp___fluid___tracedSVG'
  | 'data___childImageSharp___fluid___aspectRatio'
  | 'data___childImageSharp___fluid___src'
  | 'data___childImageSharp___fluid___srcSet'
  | 'data___childImageSharp___fluid___srcWebp'
  | 'data___childImageSharp___fluid___srcSetWebp'
  | 'data___childImageSharp___fluid___sizes'
  | 'data___childImageSharp___fluid___originalImg'
  | 'data___childImageSharp___fluid___originalName'
  | 'data___childImageSharp___fluid___presentationWidth'
  | 'data___childImageSharp___fluid___presentationHeight'
  | 'data___childImageSharp___gatsbyImageData'
  | 'data___childImageSharp___original___width'
  | 'data___childImageSharp___original___height'
  | 'data___childImageSharp___original___src'
  | 'data___childImageSharp___resize___src'
  | 'data___childImageSharp___resize___tracedSVG'
  | 'data___childImageSharp___resize___width'
  | 'data___childImageSharp___resize___height'
  | 'data___childImageSharp___resize___aspectRatio'
  | 'data___childImageSharp___resize___originalName'
  | 'data___childImageSharp___id'
  | 'data___childImageSharp___parent___id'
  | 'data___childImageSharp___parent___children'
  | 'data___childImageSharp___children'
  | 'data___childImageSharp___children___id'
  | 'data___childImageSharp___children___children'
  | 'data___childImageSharp___internal___content'
  | 'data___childImageSharp___internal___contentDigest'
  | 'data___childImageSharp___internal___description'
  | 'data___childImageSharp___internal___fieldOwners'
  | 'data___childImageSharp___internal___ignoreType'
  | 'data___childImageSharp___internal___mediaType'
  | 'data___childImageSharp___internal___owner'
  | 'data___childImageSharp___internal___type'
  | 'data___childrenProjectsJson'
  | 'data___childrenProjectsJson___fields___slug'
  | 'data___childrenProjectsJson___image___sourceInstanceName'
  | 'data___childrenProjectsJson___image___absolutePath'
  | 'data___childrenProjectsJson___image___relativePath'
  | 'data___childrenProjectsJson___image___extension'
  | 'data___childrenProjectsJson___image___size'
  | 'data___childrenProjectsJson___image___prettySize'
  | 'data___childrenProjectsJson___image___modifiedTime'
  | 'data___childrenProjectsJson___image___accessTime'
  | 'data___childrenProjectsJson___image___changeTime'
  | 'data___childrenProjectsJson___image___birthTime'
  | 'data___childrenProjectsJson___image___root'
  | 'data___childrenProjectsJson___image___dir'
  | 'data___childrenProjectsJson___image___base'
  | 'data___childrenProjectsJson___image___ext'
  | 'data___childrenProjectsJson___image___name'
  | 'data___childrenProjectsJson___image___relativeDirectory'
  | 'data___childrenProjectsJson___image___dev'
  | 'data___childrenProjectsJson___image___mode'
  | 'data___childrenProjectsJson___image___nlink'
  | 'data___childrenProjectsJson___image___uid'
  | 'data___childrenProjectsJson___image___gid'
  | 'data___childrenProjectsJson___image___rdev'
  | 'data___childrenProjectsJson___image___ino'
  | 'data___childrenProjectsJson___image___atimeMs'
  | 'data___childrenProjectsJson___image___mtimeMs'
  | 'data___childrenProjectsJson___image___ctimeMs'
  | 'data___childrenProjectsJson___image___atime'
  | 'data___childrenProjectsJson___image___mtime'
  | 'data___childrenProjectsJson___image___ctime'
  | 'data___childrenProjectsJson___image___birthtime'
  | 'data___childrenProjectsJson___image___birthtimeMs'
  | 'data___childrenProjectsJson___image___blksize'
  | 'data___childrenProjectsJson___image___blocks'
  | 'data___childrenProjectsJson___image___publicURL'
  | 'data___childrenProjectsJson___image___childrenImageSharp'
  | 'data___childrenProjectsJson___image___childrenProjectsJson'
  | 'data___childrenProjectsJson___image___childrenHeroJson'
  | 'data___childrenProjectsJson___image___childrenAboutJson'
  | 'data___childrenProjectsJson___image___childrenContactJson'
  | 'data___childrenProjectsJson___image___id'
  | 'data___childrenProjectsJson___image___children'
  | 'data___childrenProjectsJson___title'
  | 'data___childrenProjectsJson___body'
  | 'data___childrenProjectsJson___heroImage___label'
  | 'data___childrenProjectsJson___heroImage___alt'
  | 'data___childrenProjectsJson___heroImage___id'
  | 'data___childrenProjectsJson___heroImage___children'
  | 'data___childrenProjectsJson___seo___title'
  | 'data___childrenProjectsJson___seo___description'
  | 'data___childrenProjectsJson___technologies'
  | 'data___childrenProjectsJson___languages'
  | 'data___childrenProjectsJson___gatsbyPath'
  | 'data___childrenProjectsJson___id'
  | 'data___childrenProjectsJson___parent___id'
  | 'data___childrenProjectsJson___parent___children'
  | 'data___childrenProjectsJson___children'
  | 'data___childrenProjectsJson___children___id'
  | 'data___childrenProjectsJson___children___children'
  | 'data___childrenProjectsJson___internal___content'
  | 'data___childrenProjectsJson___internal___contentDigest'
  | 'data___childrenProjectsJson___internal___description'
  | 'data___childrenProjectsJson___internal___fieldOwners'
  | 'data___childrenProjectsJson___internal___ignoreType'
  | 'data___childrenProjectsJson___internal___mediaType'
  | 'data___childrenProjectsJson___internal___owner'
  | 'data___childrenProjectsJson___internal___type'
  | 'data___childProjectsJson___fields___slug'
  | 'data___childProjectsJson___image___sourceInstanceName'
  | 'data___childProjectsJson___image___absolutePath'
  | 'data___childProjectsJson___image___relativePath'
  | 'data___childProjectsJson___image___extension'
  | 'data___childProjectsJson___image___size'
  | 'data___childProjectsJson___image___prettySize'
  | 'data___childProjectsJson___image___modifiedTime'
  | 'data___childProjectsJson___image___accessTime'
  | 'data___childProjectsJson___image___changeTime'
  | 'data___childProjectsJson___image___birthTime'
  | 'data___childProjectsJson___image___root'
  | 'data___childProjectsJson___image___dir'
  | 'data___childProjectsJson___image___base'
  | 'data___childProjectsJson___image___ext'
  | 'data___childProjectsJson___image___name'
  | 'data___childProjectsJson___image___relativeDirectory'
  | 'data___childProjectsJson___image___dev'
  | 'data___childProjectsJson___image___mode'
  | 'data___childProjectsJson___image___nlink'
  | 'data___childProjectsJson___image___uid'
  | 'data___childProjectsJson___image___gid'
  | 'data___childProjectsJson___image___rdev'
  | 'data___childProjectsJson___image___ino'
  | 'data___childProjectsJson___image___atimeMs'
  | 'data___childProjectsJson___image___mtimeMs'
  | 'data___childProjectsJson___image___ctimeMs'
  | 'data___childProjectsJson___image___atime'
  | 'data___childProjectsJson___image___mtime'
  | 'data___childProjectsJson___image___ctime'
  | 'data___childProjectsJson___image___birthtime'
  | 'data___childProjectsJson___image___birthtimeMs'
  | 'data___childProjectsJson___image___blksize'
  | 'data___childProjectsJson___image___blocks'
  | 'data___childProjectsJson___image___publicURL'
  | 'data___childProjectsJson___image___childrenImageSharp'
  | 'data___childProjectsJson___image___childrenProjectsJson'
  | 'data___childProjectsJson___image___childrenHeroJson'
  | 'data___childProjectsJson___image___childrenAboutJson'
  | 'data___childProjectsJson___image___childrenContactJson'
  | 'data___childProjectsJson___image___id'
  | 'data___childProjectsJson___image___children'
  | 'data___childProjectsJson___title'
  | 'data___childProjectsJson___body'
  | 'data___childProjectsJson___heroImage___label'
  | 'data___childProjectsJson___heroImage___alt'
  | 'data___childProjectsJson___heroImage___id'
  | 'data___childProjectsJson___heroImage___children'
  | 'data___childProjectsJson___seo___title'
  | 'data___childProjectsJson___seo___description'
  | 'data___childProjectsJson___technologies'
  | 'data___childProjectsJson___languages'
  | 'data___childProjectsJson___gatsbyPath'
  | 'data___childProjectsJson___id'
  | 'data___childProjectsJson___parent___id'
  | 'data___childProjectsJson___parent___children'
  | 'data___childProjectsJson___children'
  | 'data___childProjectsJson___children___id'
  | 'data___childProjectsJson___children___children'
  | 'data___childProjectsJson___internal___content'
  | 'data___childProjectsJson___internal___contentDigest'
  | 'data___childProjectsJson___internal___description'
  | 'data___childProjectsJson___internal___fieldOwners'
  | 'data___childProjectsJson___internal___ignoreType'
  | 'data___childProjectsJson___internal___mediaType'
  | 'data___childProjectsJson___internal___owner'
  | 'data___childProjectsJson___internal___type'
  | 'data___childrenHeroJson'
  | 'data___childrenHeroJson___fields___slug'
  | 'data___childrenHeroJson___title'
  | 'data___childrenHeroJson___heroImage___label'
  | 'data___childrenHeroJson___heroImage___alt'
  | 'data___childrenHeroJson___heroImage___id'
  | 'data___childrenHeroJson___heroImage___children'
  | 'data___childrenHeroJson___seo___title'
  | 'data___childrenHeroJson___seo___description'
  | 'data___childrenHeroJson___CTA___label'
  | 'data___childrenHeroJson___CTA___url'
  | 'data___childrenHeroJson___id'
  | 'data___childrenHeroJson___parent___id'
  | 'data___childrenHeroJson___parent___children'
  | 'data___childrenHeroJson___children'
  | 'data___childrenHeroJson___children___id'
  | 'data___childrenHeroJson___children___children'
  | 'data___childrenHeroJson___internal___content'
  | 'data___childrenHeroJson___internal___contentDigest'
  | 'data___childrenHeroJson___internal___description'
  | 'data___childrenHeroJson___internal___fieldOwners'
  | 'data___childrenHeroJson___internal___ignoreType'
  | 'data___childrenHeroJson___internal___mediaType'
  | 'data___childrenHeroJson___internal___owner'
  | 'data___childrenHeroJson___internal___type'
  | 'data___childHeroJson___fields___slug'
  | 'data___childHeroJson___title'
  | 'data___childHeroJson___heroImage___label'
  | 'data___childHeroJson___heroImage___alt'
  | 'data___childHeroJson___heroImage___id'
  | 'data___childHeroJson___heroImage___children'
  | 'data___childHeroJson___seo___title'
  | 'data___childHeroJson___seo___description'
  | 'data___childHeroJson___CTA___label'
  | 'data___childHeroJson___CTA___url'
  | 'data___childHeroJson___id'
  | 'data___childHeroJson___parent___id'
  | 'data___childHeroJson___parent___children'
  | 'data___childHeroJson___children'
  | 'data___childHeroJson___children___id'
  | 'data___childHeroJson___children___children'
  | 'data___childHeroJson___internal___content'
  | 'data___childHeroJson___internal___contentDigest'
  | 'data___childHeroJson___internal___description'
  | 'data___childHeroJson___internal___fieldOwners'
  | 'data___childHeroJson___internal___ignoreType'
  | 'data___childHeroJson___internal___mediaType'
  | 'data___childHeroJson___internal___owner'
  | 'data___childHeroJson___internal___type'
  | 'data___childrenAboutJson'
  | 'data___childrenAboutJson___fields___slug'
  | 'data___childrenAboutJson___title'
  | 'data___childrenAboutJson___body'
  | 'data___childrenAboutJson___languages'
  | 'data___childrenAboutJson___technologies'
  | 'data___childrenAboutJson___id'
  | 'data___childrenAboutJson___parent___id'
  | 'data___childrenAboutJson___parent___children'
  | 'data___childrenAboutJson___children'
  | 'data___childrenAboutJson___children___id'
  | 'data___childrenAboutJson___children___children'
  | 'data___childrenAboutJson___internal___content'
  | 'data___childrenAboutJson___internal___contentDigest'
  | 'data___childrenAboutJson___internal___description'
  | 'data___childrenAboutJson___internal___fieldOwners'
  | 'data___childrenAboutJson___internal___ignoreType'
  | 'data___childrenAboutJson___internal___mediaType'
  | 'data___childrenAboutJson___internal___owner'
  | 'data___childrenAboutJson___internal___type'
  | 'data___childAboutJson___fields___slug'
  | 'data___childAboutJson___title'
  | 'data___childAboutJson___body'
  | 'data___childAboutJson___languages'
  | 'data___childAboutJson___technologies'
  | 'data___childAboutJson___id'
  | 'data___childAboutJson___parent___id'
  | 'data___childAboutJson___parent___children'
  | 'data___childAboutJson___children'
  | 'data___childAboutJson___children___id'
  | 'data___childAboutJson___children___children'
  | 'data___childAboutJson___internal___content'
  | 'data___childAboutJson___internal___contentDigest'
  | 'data___childAboutJson___internal___description'
  | 'data___childAboutJson___internal___fieldOwners'
  | 'data___childAboutJson___internal___ignoreType'
  | 'data___childAboutJson___internal___mediaType'
  | 'data___childAboutJson___internal___owner'
  | 'data___childAboutJson___internal___type'
  | 'data___childrenContactJson'
  | 'data___childrenContactJson___fields___slug'
  | 'data___childrenContactJson___title'
  | 'data___childrenContactJson___body'
  | 'data___childrenContactJson___id'
  | 'data___childrenContactJson___parent___id'
  | 'data___childrenContactJson___parent___children'
  | 'data___childrenContactJson___children'
  | 'data___childrenContactJson___children___id'
  | 'data___childrenContactJson___children___children'
  | 'data___childrenContactJson___internal___content'
  | 'data___childrenContactJson___internal___contentDigest'
  | 'data___childrenContactJson___internal___description'
  | 'data___childrenContactJson___internal___fieldOwners'
  | 'data___childrenContactJson___internal___ignoreType'
  | 'data___childrenContactJson___internal___mediaType'
  | 'data___childrenContactJson___internal___owner'
  | 'data___childrenContactJson___internal___type'
  | 'data___childContactJson___fields___slug'
  | 'data___childContactJson___title'
  | 'data___childContactJson___body'
  | 'data___childContactJson___id'
  | 'data___childContactJson___parent___id'
  | 'data___childContactJson___parent___children'
  | 'data___childContactJson___children'
  | 'data___childContactJson___children___id'
  | 'data___childContactJson___children___children'
  | 'data___childContactJson___internal___content'
  | 'data___childContactJson___internal___contentDigest'
  | 'data___childContactJson___internal___description'
  | 'data___childContactJson___internal___fieldOwners'
  | 'data___childContactJson___internal___ignoreType'
  | 'data___childContactJson___internal___mediaType'
  | 'data___childContactJson___internal___owner'
  | 'data___childContactJson___internal___type'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'label'
  | 'alt'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type HeroJsonHeroImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<HeroJsonHeroImageEdge>;
  nodes: Array<HeroJsonHeroImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type HeroJsonHeroImageSortInput = {
  fields?: Maybe<Array<Maybe<HeroJsonHeroImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AboutJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AboutJsonEdge>;
  nodes: Array<AboutJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<AboutJsonGroupConnection>;
};


export type AboutJsonConnectionDistinctArgs = {
  field: AboutJsonFieldsEnum;
};


export type AboutJsonConnectionMaxArgs = {
  field: AboutJsonFieldsEnum;
};


export type AboutJsonConnectionMinArgs = {
  field: AboutJsonFieldsEnum;
};


export type AboutJsonConnectionSumArgs = {
  field: AboutJsonFieldsEnum;
};


export type AboutJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AboutJsonFieldsEnum;
};

export type AboutJsonEdge = {
  next?: Maybe<AboutJson>;
  node: AboutJson;
  previous?: Maybe<AboutJson>;
};

export type AboutJsonFieldsEnum =
  | 'fields___slug'
  | 'title'
  | 'body'
  | 'languages'
  | 'technologies'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type AboutJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AboutJsonEdge>;
  nodes: Array<AboutJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AboutJsonSortInput = {
  fields?: Maybe<Array<Maybe<AboutJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type AboutJsonSeoImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AboutJsonSeoImageEdge>;
  nodes: Array<AboutJsonSeoImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<AboutJsonSeoImageGroupConnection>;
};


export type AboutJsonSeoImageConnectionDistinctArgs = {
  field: AboutJsonSeoImageFieldsEnum;
};


export type AboutJsonSeoImageConnectionMaxArgs = {
  field: AboutJsonSeoImageFieldsEnum;
};


export type AboutJsonSeoImageConnectionMinArgs = {
  field: AboutJsonSeoImageFieldsEnum;
};


export type AboutJsonSeoImageConnectionSumArgs = {
  field: AboutJsonSeoImageFieldsEnum;
};


export type AboutJsonSeoImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: AboutJsonSeoImageFieldsEnum;
};

export type AboutJsonSeoImageEdge = {
  next?: Maybe<AboutJsonSeoImage>;
  node: AboutJsonSeoImage;
  previous?: Maybe<AboutJsonSeoImage>;
};

export type AboutJsonSeoImageFieldsEnum =
  | 'data___sourceInstanceName'
  | 'data___absolutePath'
  | 'data___relativePath'
  | 'data___extension'
  | 'data___size'
  | 'data___prettySize'
  | 'data___modifiedTime'
  | 'data___accessTime'
  | 'data___changeTime'
  | 'data___birthTime'
  | 'data___root'
  | 'data___dir'
  | 'data___base'
  | 'data___ext'
  | 'data___name'
  | 'data___relativeDirectory'
  | 'data___dev'
  | 'data___mode'
  | 'data___nlink'
  | 'data___uid'
  | 'data___gid'
  | 'data___rdev'
  | 'data___ino'
  | 'data___atimeMs'
  | 'data___mtimeMs'
  | 'data___ctimeMs'
  | 'data___atime'
  | 'data___mtime'
  | 'data___ctime'
  | 'data___birthtime'
  | 'data___birthtimeMs'
  | 'data___blksize'
  | 'data___blocks'
  | 'data___publicURL'
  | 'data___childrenImageSharp'
  | 'data___childrenImageSharp___fixed___base64'
  | 'data___childrenImageSharp___fixed___tracedSVG'
  | 'data___childrenImageSharp___fixed___aspectRatio'
  | 'data___childrenImageSharp___fixed___width'
  | 'data___childrenImageSharp___fixed___height'
  | 'data___childrenImageSharp___fixed___src'
  | 'data___childrenImageSharp___fixed___srcSet'
  | 'data___childrenImageSharp___fixed___srcWebp'
  | 'data___childrenImageSharp___fixed___srcSetWebp'
  | 'data___childrenImageSharp___fixed___originalName'
  | 'data___childrenImageSharp___fluid___base64'
  | 'data___childrenImageSharp___fluid___tracedSVG'
  | 'data___childrenImageSharp___fluid___aspectRatio'
  | 'data___childrenImageSharp___fluid___src'
  | 'data___childrenImageSharp___fluid___srcSet'
  | 'data___childrenImageSharp___fluid___srcWebp'
  | 'data___childrenImageSharp___fluid___srcSetWebp'
  | 'data___childrenImageSharp___fluid___sizes'
  | 'data___childrenImageSharp___fluid___originalImg'
  | 'data___childrenImageSharp___fluid___originalName'
  | 'data___childrenImageSharp___fluid___presentationWidth'
  | 'data___childrenImageSharp___fluid___presentationHeight'
  | 'data___childrenImageSharp___gatsbyImageData'
  | 'data___childrenImageSharp___original___width'
  | 'data___childrenImageSharp___original___height'
  | 'data___childrenImageSharp___original___src'
  | 'data___childrenImageSharp___resize___src'
  | 'data___childrenImageSharp___resize___tracedSVG'
  | 'data___childrenImageSharp___resize___width'
  | 'data___childrenImageSharp___resize___height'
  | 'data___childrenImageSharp___resize___aspectRatio'
  | 'data___childrenImageSharp___resize___originalName'
  | 'data___childrenImageSharp___id'
  | 'data___childrenImageSharp___parent___id'
  | 'data___childrenImageSharp___parent___children'
  | 'data___childrenImageSharp___children'
  | 'data___childrenImageSharp___children___id'
  | 'data___childrenImageSharp___children___children'
  | 'data___childrenImageSharp___internal___content'
  | 'data___childrenImageSharp___internal___contentDigest'
  | 'data___childrenImageSharp___internal___description'
  | 'data___childrenImageSharp___internal___fieldOwners'
  | 'data___childrenImageSharp___internal___ignoreType'
  | 'data___childrenImageSharp___internal___mediaType'
  | 'data___childrenImageSharp___internal___owner'
  | 'data___childrenImageSharp___internal___type'
  | 'data___childImageSharp___fixed___base64'
  | 'data___childImageSharp___fixed___tracedSVG'
  | 'data___childImageSharp___fixed___aspectRatio'
  | 'data___childImageSharp___fixed___width'
  | 'data___childImageSharp___fixed___height'
  | 'data___childImageSharp___fixed___src'
  | 'data___childImageSharp___fixed___srcSet'
  | 'data___childImageSharp___fixed___srcWebp'
  | 'data___childImageSharp___fixed___srcSetWebp'
  | 'data___childImageSharp___fixed___originalName'
  | 'data___childImageSharp___fluid___base64'
  | 'data___childImageSharp___fluid___tracedSVG'
  | 'data___childImageSharp___fluid___aspectRatio'
  | 'data___childImageSharp___fluid___src'
  | 'data___childImageSharp___fluid___srcSet'
  | 'data___childImageSharp___fluid___srcWebp'
  | 'data___childImageSharp___fluid___srcSetWebp'
  | 'data___childImageSharp___fluid___sizes'
  | 'data___childImageSharp___fluid___originalImg'
  | 'data___childImageSharp___fluid___originalName'
  | 'data___childImageSharp___fluid___presentationWidth'
  | 'data___childImageSharp___fluid___presentationHeight'
  | 'data___childImageSharp___gatsbyImageData'
  | 'data___childImageSharp___original___width'
  | 'data___childImageSharp___original___height'
  | 'data___childImageSharp___original___src'
  | 'data___childImageSharp___resize___src'
  | 'data___childImageSharp___resize___tracedSVG'
  | 'data___childImageSharp___resize___width'
  | 'data___childImageSharp___resize___height'
  | 'data___childImageSharp___resize___aspectRatio'
  | 'data___childImageSharp___resize___originalName'
  | 'data___childImageSharp___id'
  | 'data___childImageSharp___parent___id'
  | 'data___childImageSharp___parent___children'
  | 'data___childImageSharp___children'
  | 'data___childImageSharp___children___id'
  | 'data___childImageSharp___children___children'
  | 'data___childImageSharp___internal___content'
  | 'data___childImageSharp___internal___contentDigest'
  | 'data___childImageSharp___internal___description'
  | 'data___childImageSharp___internal___fieldOwners'
  | 'data___childImageSharp___internal___ignoreType'
  | 'data___childImageSharp___internal___mediaType'
  | 'data___childImageSharp___internal___owner'
  | 'data___childImageSharp___internal___type'
  | 'data___childrenProjectsJson'
  | 'data___childrenProjectsJson___fields___slug'
  | 'data___childrenProjectsJson___image___sourceInstanceName'
  | 'data___childrenProjectsJson___image___absolutePath'
  | 'data___childrenProjectsJson___image___relativePath'
  | 'data___childrenProjectsJson___image___extension'
  | 'data___childrenProjectsJson___image___size'
  | 'data___childrenProjectsJson___image___prettySize'
  | 'data___childrenProjectsJson___image___modifiedTime'
  | 'data___childrenProjectsJson___image___accessTime'
  | 'data___childrenProjectsJson___image___changeTime'
  | 'data___childrenProjectsJson___image___birthTime'
  | 'data___childrenProjectsJson___image___root'
  | 'data___childrenProjectsJson___image___dir'
  | 'data___childrenProjectsJson___image___base'
  | 'data___childrenProjectsJson___image___ext'
  | 'data___childrenProjectsJson___image___name'
  | 'data___childrenProjectsJson___image___relativeDirectory'
  | 'data___childrenProjectsJson___image___dev'
  | 'data___childrenProjectsJson___image___mode'
  | 'data___childrenProjectsJson___image___nlink'
  | 'data___childrenProjectsJson___image___uid'
  | 'data___childrenProjectsJson___image___gid'
  | 'data___childrenProjectsJson___image___rdev'
  | 'data___childrenProjectsJson___image___ino'
  | 'data___childrenProjectsJson___image___atimeMs'
  | 'data___childrenProjectsJson___image___mtimeMs'
  | 'data___childrenProjectsJson___image___ctimeMs'
  | 'data___childrenProjectsJson___image___atime'
  | 'data___childrenProjectsJson___image___mtime'
  | 'data___childrenProjectsJson___image___ctime'
  | 'data___childrenProjectsJson___image___birthtime'
  | 'data___childrenProjectsJson___image___birthtimeMs'
  | 'data___childrenProjectsJson___image___blksize'
  | 'data___childrenProjectsJson___image___blocks'
  | 'data___childrenProjectsJson___image___publicURL'
  | 'data___childrenProjectsJson___image___childrenImageSharp'
  | 'data___childrenProjectsJson___image___childrenProjectsJson'
  | 'data___childrenProjectsJson___image___childrenHeroJson'
  | 'data___childrenProjectsJson___image___childrenAboutJson'
  | 'data___childrenProjectsJson___image___childrenContactJson'
  | 'data___childrenProjectsJson___image___id'
  | 'data___childrenProjectsJson___image___children'
  | 'data___childrenProjectsJson___title'
  | 'data___childrenProjectsJson___body'
  | 'data___childrenProjectsJson___heroImage___label'
  | 'data___childrenProjectsJson___heroImage___alt'
  | 'data___childrenProjectsJson___heroImage___id'
  | 'data___childrenProjectsJson___heroImage___children'
  | 'data___childrenProjectsJson___seo___title'
  | 'data___childrenProjectsJson___seo___description'
  | 'data___childrenProjectsJson___technologies'
  | 'data___childrenProjectsJson___languages'
  | 'data___childrenProjectsJson___gatsbyPath'
  | 'data___childrenProjectsJson___id'
  | 'data___childrenProjectsJson___parent___id'
  | 'data___childrenProjectsJson___parent___children'
  | 'data___childrenProjectsJson___children'
  | 'data___childrenProjectsJson___children___id'
  | 'data___childrenProjectsJson___children___children'
  | 'data___childrenProjectsJson___internal___content'
  | 'data___childrenProjectsJson___internal___contentDigest'
  | 'data___childrenProjectsJson___internal___description'
  | 'data___childrenProjectsJson___internal___fieldOwners'
  | 'data___childrenProjectsJson___internal___ignoreType'
  | 'data___childrenProjectsJson___internal___mediaType'
  | 'data___childrenProjectsJson___internal___owner'
  | 'data___childrenProjectsJson___internal___type'
  | 'data___childProjectsJson___fields___slug'
  | 'data___childProjectsJson___image___sourceInstanceName'
  | 'data___childProjectsJson___image___absolutePath'
  | 'data___childProjectsJson___image___relativePath'
  | 'data___childProjectsJson___image___extension'
  | 'data___childProjectsJson___image___size'
  | 'data___childProjectsJson___image___prettySize'
  | 'data___childProjectsJson___image___modifiedTime'
  | 'data___childProjectsJson___image___accessTime'
  | 'data___childProjectsJson___image___changeTime'
  | 'data___childProjectsJson___image___birthTime'
  | 'data___childProjectsJson___image___root'
  | 'data___childProjectsJson___image___dir'
  | 'data___childProjectsJson___image___base'
  | 'data___childProjectsJson___image___ext'
  | 'data___childProjectsJson___image___name'
  | 'data___childProjectsJson___image___relativeDirectory'
  | 'data___childProjectsJson___image___dev'
  | 'data___childProjectsJson___image___mode'
  | 'data___childProjectsJson___image___nlink'
  | 'data___childProjectsJson___image___uid'
  | 'data___childProjectsJson___image___gid'
  | 'data___childProjectsJson___image___rdev'
  | 'data___childProjectsJson___image___ino'
  | 'data___childProjectsJson___image___atimeMs'
  | 'data___childProjectsJson___image___mtimeMs'
  | 'data___childProjectsJson___image___ctimeMs'
  | 'data___childProjectsJson___image___atime'
  | 'data___childProjectsJson___image___mtime'
  | 'data___childProjectsJson___image___ctime'
  | 'data___childProjectsJson___image___birthtime'
  | 'data___childProjectsJson___image___birthtimeMs'
  | 'data___childProjectsJson___image___blksize'
  | 'data___childProjectsJson___image___blocks'
  | 'data___childProjectsJson___image___publicURL'
  | 'data___childProjectsJson___image___childrenImageSharp'
  | 'data___childProjectsJson___image___childrenProjectsJson'
  | 'data___childProjectsJson___image___childrenHeroJson'
  | 'data___childProjectsJson___image___childrenAboutJson'
  | 'data___childProjectsJson___image___childrenContactJson'
  | 'data___childProjectsJson___image___id'
  | 'data___childProjectsJson___image___children'
  | 'data___childProjectsJson___title'
  | 'data___childProjectsJson___body'
  | 'data___childProjectsJson___heroImage___label'
  | 'data___childProjectsJson___heroImage___alt'
  | 'data___childProjectsJson___heroImage___id'
  | 'data___childProjectsJson___heroImage___children'
  | 'data___childProjectsJson___seo___title'
  | 'data___childProjectsJson___seo___description'
  | 'data___childProjectsJson___technologies'
  | 'data___childProjectsJson___languages'
  | 'data___childProjectsJson___gatsbyPath'
  | 'data___childProjectsJson___id'
  | 'data___childProjectsJson___parent___id'
  | 'data___childProjectsJson___parent___children'
  | 'data___childProjectsJson___children'
  | 'data___childProjectsJson___children___id'
  | 'data___childProjectsJson___children___children'
  | 'data___childProjectsJson___internal___content'
  | 'data___childProjectsJson___internal___contentDigest'
  | 'data___childProjectsJson___internal___description'
  | 'data___childProjectsJson___internal___fieldOwners'
  | 'data___childProjectsJson___internal___ignoreType'
  | 'data___childProjectsJson___internal___mediaType'
  | 'data___childProjectsJson___internal___owner'
  | 'data___childProjectsJson___internal___type'
  | 'data___childrenHeroJson'
  | 'data___childrenHeroJson___fields___slug'
  | 'data___childrenHeroJson___title'
  | 'data___childrenHeroJson___heroImage___label'
  | 'data___childrenHeroJson___heroImage___alt'
  | 'data___childrenHeroJson___heroImage___id'
  | 'data___childrenHeroJson___heroImage___children'
  | 'data___childrenHeroJson___seo___title'
  | 'data___childrenHeroJson___seo___description'
  | 'data___childrenHeroJson___CTA___label'
  | 'data___childrenHeroJson___CTA___url'
  | 'data___childrenHeroJson___id'
  | 'data___childrenHeroJson___parent___id'
  | 'data___childrenHeroJson___parent___children'
  | 'data___childrenHeroJson___children'
  | 'data___childrenHeroJson___children___id'
  | 'data___childrenHeroJson___children___children'
  | 'data___childrenHeroJson___internal___content'
  | 'data___childrenHeroJson___internal___contentDigest'
  | 'data___childrenHeroJson___internal___description'
  | 'data___childrenHeroJson___internal___fieldOwners'
  | 'data___childrenHeroJson___internal___ignoreType'
  | 'data___childrenHeroJson___internal___mediaType'
  | 'data___childrenHeroJson___internal___owner'
  | 'data___childrenHeroJson___internal___type'
  | 'data___childHeroJson___fields___slug'
  | 'data___childHeroJson___title'
  | 'data___childHeroJson___heroImage___label'
  | 'data___childHeroJson___heroImage___alt'
  | 'data___childHeroJson___heroImage___id'
  | 'data___childHeroJson___heroImage___children'
  | 'data___childHeroJson___seo___title'
  | 'data___childHeroJson___seo___description'
  | 'data___childHeroJson___CTA___label'
  | 'data___childHeroJson___CTA___url'
  | 'data___childHeroJson___id'
  | 'data___childHeroJson___parent___id'
  | 'data___childHeroJson___parent___children'
  | 'data___childHeroJson___children'
  | 'data___childHeroJson___children___id'
  | 'data___childHeroJson___children___children'
  | 'data___childHeroJson___internal___content'
  | 'data___childHeroJson___internal___contentDigest'
  | 'data___childHeroJson___internal___description'
  | 'data___childHeroJson___internal___fieldOwners'
  | 'data___childHeroJson___internal___ignoreType'
  | 'data___childHeroJson___internal___mediaType'
  | 'data___childHeroJson___internal___owner'
  | 'data___childHeroJson___internal___type'
  | 'data___childrenAboutJson'
  | 'data___childrenAboutJson___fields___slug'
  | 'data___childrenAboutJson___title'
  | 'data___childrenAboutJson___body'
  | 'data___childrenAboutJson___languages'
  | 'data___childrenAboutJson___technologies'
  | 'data___childrenAboutJson___id'
  | 'data___childrenAboutJson___parent___id'
  | 'data___childrenAboutJson___parent___children'
  | 'data___childrenAboutJson___children'
  | 'data___childrenAboutJson___children___id'
  | 'data___childrenAboutJson___children___children'
  | 'data___childrenAboutJson___internal___content'
  | 'data___childrenAboutJson___internal___contentDigest'
  | 'data___childrenAboutJson___internal___description'
  | 'data___childrenAboutJson___internal___fieldOwners'
  | 'data___childrenAboutJson___internal___ignoreType'
  | 'data___childrenAboutJson___internal___mediaType'
  | 'data___childrenAboutJson___internal___owner'
  | 'data___childrenAboutJson___internal___type'
  | 'data___childAboutJson___fields___slug'
  | 'data___childAboutJson___title'
  | 'data___childAboutJson___body'
  | 'data___childAboutJson___languages'
  | 'data___childAboutJson___technologies'
  | 'data___childAboutJson___id'
  | 'data___childAboutJson___parent___id'
  | 'data___childAboutJson___parent___children'
  | 'data___childAboutJson___children'
  | 'data___childAboutJson___children___id'
  | 'data___childAboutJson___children___children'
  | 'data___childAboutJson___internal___content'
  | 'data___childAboutJson___internal___contentDigest'
  | 'data___childAboutJson___internal___description'
  | 'data___childAboutJson___internal___fieldOwners'
  | 'data___childAboutJson___internal___ignoreType'
  | 'data___childAboutJson___internal___mediaType'
  | 'data___childAboutJson___internal___owner'
  | 'data___childAboutJson___internal___type'
  | 'data___childrenContactJson'
  | 'data___childrenContactJson___fields___slug'
  | 'data___childrenContactJson___title'
  | 'data___childrenContactJson___body'
  | 'data___childrenContactJson___id'
  | 'data___childrenContactJson___parent___id'
  | 'data___childrenContactJson___parent___children'
  | 'data___childrenContactJson___children'
  | 'data___childrenContactJson___children___id'
  | 'data___childrenContactJson___children___children'
  | 'data___childrenContactJson___internal___content'
  | 'data___childrenContactJson___internal___contentDigest'
  | 'data___childrenContactJson___internal___description'
  | 'data___childrenContactJson___internal___fieldOwners'
  | 'data___childrenContactJson___internal___ignoreType'
  | 'data___childrenContactJson___internal___mediaType'
  | 'data___childrenContactJson___internal___owner'
  | 'data___childrenContactJson___internal___type'
  | 'data___childContactJson___fields___slug'
  | 'data___childContactJson___title'
  | 'data___childContactJson___body'
  | 'data___childContactJson___id'
  | 'data___childContactJson___parent___id'
  | 'data___childContactJson___parent___children'
  | 'data___childContactJson___children'
  | 'data___childContactJson___children___id'
  | 'data___childContactJson___children___children'
  | 'data___childContactJson___internal___content'
  | 'data___childContactJson___internal___contentDigest'
  | 'data___childContactJson___internal___description'
  | 'data___childContactJson___internal___fieldOwners'
  | 'data___childContactJson___internal___ignoreType'
  | 'data___childContactJson___internal___mediaType'
  | 'data___childContactJson___internal___owner'
  | 'data___childContactJson___internal___type'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type AboutJsonSeoImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<AboutJsonSeoImageEdge>;
  nodes: Array<AboutJsonSeoImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type AboutJsonSeoImageFilterInput = {
  data?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type AboutJsonSeoImageSortInput = {
  fields?: Maybe<Array<Maybe<AboutJsonSeoImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContactJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContactJsonEdge>;
  nodes: Array<ContactJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContactJsonGroupConnection>;
};


export type ContactJsonConnectionDistinctArgs = {
  field: ContactJsonFieldsEnum;
};


export type ContactJsonConnectionMaxArgs = {
  field: ContactJsonFieldsEnum;
};


export type ContactJsonConnectionMinArgs = {
  field: ContactJsonFieldsEnum;
};


export type ContactJsonConnectionSumArgs = {
  field: ContactJsonFieldsEnum;
};


export type ContactJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContactJsonFieldsEnum;
};

export type ContactJsonEdge = {
  next?: Maybe<ContactJson>;
  node: ContactJson;
  previous?: Maybe<ContactJson>;
};

export type ContactJsonFieldsEnum =
  | 'fields___slug'
  | 'title'
  | 'body'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContactJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContactJsonEdge>;
  nodes: Array<ContactJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContactJsonSortInput = {
  fields?: Maybe<Array<Maybe<ContactJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContactJsonSeoImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContactJsonSeoImageEdge>;
  nodes: Array<ContactJsonSeoImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContactJsonSeoImageGroupConnection>;
};


export type ContactJsonSeoImageConnectionDistinctArgs = {
  field: ContactJsonSeoImageFieldsEnum;
};


export type ContactJsonSeoImageConnectionMaxArgs = {
  field: ContactJsonSeoImageFieldsEnum;
};


export type ContactJsonSeoImageConnectionMinArgs = {
  field: ContactJsonSeoImageFieldsEnum;
};


export type ContactJsonSeoImageConnectionSumArgs = {
  field: ContactJsonSeoImageFieldsEnum;
};


export type ContactJsonSeoImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContactJsonSeoImageFieldsEnum;
};

export type ContactJsonSeoImageEdge = {
  next?: Maybe<ContactJsonSeoImage>;
  node: ContactJsonSeoImage;
  previous?: Maybe<ContactJsonSeoImage>;
};

export type ContactJsonSeoImageFieldsEnum =
  | 'data___sourceInstanceName'
  | 'data___absolutePath'
  | 'data___relativePath'
  | 'data___extension'
  | 'data___size'
  | 'data___prettySize'
  | 'data___modifiedTime'
  | 'data___accessTime'
  | 'data___changeTime'
  | 'data___birthTime'
  | 'data___root'
  | 'data___dir'
  | 'data___base'
  | 'data___ext'
  | 'data___name'
  | 'data___relativeDirectory'
  | 'data___dev'
  | 'data___mode'
  | 'data___nlink'
  | 'data___uid'
  | 'data___gid'
  | 'data___rdev'
  | 'data___ino'
  | 'data___atimeMs'
  | 'data___mtimeMs'
  | 'data___ctimeMs'
  | 'data___atime'
  | 'data___mtime'
  | 'data___ctime'
  | 'data___birthtime'
  | 'data___birthtimeMs'
  | 'data___blksize'
  | 'data___blocks'
  | 'data___publicURL'
  | 'data___childrenImageSharp'
  | 'data___childrenImageSharp___fixed___base64'
  | 'data___childrenImageSharp___fixed___tracedSVG'
  | 'data___childrenImageSharp___fixed___aspectRatio'
  | 'data___childrenImageSharp___fixed___width'
  | 'data___childrenImageSharp___fixed___height'
  | 'data___childrenImageSharp___fixed___src'
  | 'data___childrenImageSharp___fixed___srcSet'
  | 'data___childrenImageSharp___fixed___srcWebp'
  | 'data___childrenImageSharp___fixed___srcSetWebp'
  | 'data___childrenImageSharp___fixed___originalName'
  | 'data___childrenImageSharp___fluid___base64'
  | 'data___childrenImageSharp___fluid___tracedSVG'
  | 'data___childrenImageSharp___fluid___aspectRatio'
  | 'data___childrenImageSharp___fluid___src'
  | 'data___childrenImageSharp___fluid___srcSet'
  | 'data___childrenImageSharp___fluid___srcWebp'
  | 'data___childrenImageSharp___fluid___srcSetWebp'
  | 'data___childrenImageSharp___fluid___sizes'
  | 'data___childrenImageSharp___fluid___originalImg'
  | 'data___childrenImageSharp___fluid___originalName'
  | 'data___childrenImageSharp___fluid___presentationWidth'
  | 'data___childrenImageSharp___fluid___presentationHeight'
  | 'data___childrenImageSharp___gatsbyImageData'
  | 'data___childrenImageSharp___original___width'
  | 'data___childrenImageSharp___original___height'
  | 'data___childrenImageSharp___original___src'
  | 'data___childrenImageSharp___resize___src'
  | 'data___childrenImageSharp___resize___tracedSVG'
  | 'data___childrenImageSharp___resize___width'
  | 'data___childrenImageSharp___resize___height'
  | 'data___childrenImageSharp___resize___aspectRatio'
  | 'data___childrenImageSharp___resize___originalName'
  | 'data___childrenImageSharp___id'
  | 'data___childrenImageSharp___parent___id'
  | 'data___childrenImageSharp___parent___children'
  | 'data___childrenImageSharp___children'
  | 'data___childrenImageSharp___children___id'
  | 'data___childrenImageSharp___children___children'
  | 'data___childrenImageSharp___internal___content'
  | 'data___childrenImageSharp___internal___contentDigest'
  | 'data___childrenImageSharp___internal___description'
  | 'data___childrenImageSharp___internal___fieldOwners'
  | 'data___childrenImageSharp___internal___ignoreType'
  | 'data___childrenImageSharp___internal___mediaType'
  | 'data___childrenImageSharp___internal___owner'
  | 'data___childrenImageSharp___internal___type'
  | 'data___childImageSharp___fixed___base64'
  | 'data___childImageSharp___fixed___tracedSVG'
  | 'data___childImageSharp___fixed___aspectRatio'
  | 'data___childImageSharp___fixed___width'
  | 'data___childImageSharp___fixed___height'
  | 'data___childImageSharp___fixed___src'
  | 'data___childImageSharp___fixed___srcSet'
  | 'data___childImageSharp___fixed___srcWebp'
  | 'data___childImageSharp___fixed___srcSetWebp'
  | 'data___childImageSharp___fixed___originalName'
  | 'data___childImageSharp___fluid___base64'
  | 'data___childImageSharp___fluid___tracedSVG'
  | 'data___childImageSharp___fluid___aspectRatio'
  | 'data___childImageSharp___fluid___src'
  | 'data___childImageSharp___fluid___srcSet'
  | 'data___childImageSharp___fluid___srcWebp'
  | 'data___childImageSharp___fluid___srcSetWebp'
  | 'data___childImageSharp___fluid___sizes'
  | 'data___childImageSharp___fluid___originalImg'
  | 'data___childImageSharp___fluid___originalName'
  | 'data___childImageSharp___fluid___presentationWidth'
  | 'data___childImageSharp___fluid___presentationHeight'
  | 'data___childImageSharp___gatsbyImageData'
  | 'data___childImageSharp___original___width'
  | 'data___childImageSharp___original___height'
  | 'data___childImageSharp___original___src'
  | 'data___childImageSharp___resize___src'
  | 'data___childImageSharp___resize___tracedSVG'
  | 'data___childImageSharp___resize___width'
  | 'data___childImageSharp___resize___height'
  | 'data___childImageSharp___resize___aspectRatio'
  | 'data___childImageSharp___resize___originalName'
  | 'data___childImageSharp___id'
  | 'data___childImageSharp___parent___id'
  | 'data___childImageSharp___parent___children'
  | 'data___childImageSharp___children'
  | 'data___childImageSharp___children___id'
  | 'data___childImageSharp___children___children'
  | 'data___childImageSharp___internal___content'
  | 'data___childImageSharp___internal___contentDigest'
  | 'data___childImageSharp___internal___description'
  | 'data___childImageSharp___internal___fieldOwners'
  | 'data___childImageSharp___internal___ignoreType'
  | 'data___childImageSharp___internal___mediaType'
  | 'data___childImageSharp___internal___owner'
  | 'data___childImageSharp___internal___type'
  | 'data___childrenProjectsJson'
  | 'data___childrenProjectsJson___fields___slug'
  | 'data___childrenProjectsJson___image___sourceInstanceName'
  | 'data___childrenProjectsJson___image___absolutePath'
  | 'data___childrenProjectsJson___image___relativePath'
  | 'data___childrenProjectsJson___image___extension'
  | 'data___childrenProjectsJson___image___size'
  | 'data___childrenProjectsJson___image___prettySize'
  | 'data___childrenProjectsJson___image___modifiedTime'
  | 'data___childrenProjectsJson___image___accessTime'
  | 'data___childrenProjectsJson___image___changeTime'
  | 'data___childrenProjectsJson___image___birthTime'
  | 'data___childrenProjectsJson___image___root'
  | 'data___childrenProjectsJson___image___dir'
  | 'data___childrenProjectsJson___image___base'
  | 'data___childrenProjectsJson___image___ext'
  | 'data___childrenProjectsJson___image___name'
  | 'data___childrenProjectsJson___image___relativeDirectory'
  | 'data___childrenProjectsJson___image___dev'
  | 'data___childrenProjectsJson___image___mode'
  | 'data___childrenProjectsJson___image___nlink'
  | 'data___childrenProjectsJson___image___uid'
  | 'data___childrenProjectsJson___image___gid'
  | 'data___childrenProjectsJson___image___rdev'
  | 'data___childrenProjectsJson___image___ino'
  | 'data___childrenProjectsJson___image___atimeMs'
  | 'data___childrenProjectsJson___image___mtimeMs'
  | 'data___childrenProjectsJson___image___ctimeMs'
  | 'data___childrenProjectsJson___image___atime'
  | 'data___childrenProjectsJson___image___mtime'
  | 'data___childrenProjectsJson___image___ctime'
  | 'data___childrenProjectsJson___image___birthtime'
  | 'data___childrenProjectsJson___image___birthtimeMs'
  | 'data___childrenProjectsJson___image___blksize'
  | 'data___childrenProjectsJson___image___blocks'
  | 'data___childrenProjectsJson___image___publicURL'
  | 'data___childrenProjectsJson___image___childrenImageSharp'
  | 'data___childrenProjectsJson___image___childrenProjectsJson'
  | 'data___childrenProjectsJson___image___childrenHeroJson'
  | 'data___childrenProjectsJson___image___childrenAboutJson'
  | 'data___childrenProjectsJson___image___childrenContactJson'
  | 'data___childrenProjectsJson___image___id'
  | 'data___childrenProjectsJson___image___children'
  | 'data___childrenProjectsJson___title'
  | 'data___childrenProjectsJson___body'
  | 'data___childrenProjectsJson___heroImage___label'
  | 'data___childrenProjectsJson___heroImage___alt'
  | 'data___childrenProjectsJson___heroImage___id'
  | 'data___childrenProjectsJson___heroImage___children'
  | 'data___childrenProjectsJson___seo___title'
  | 'data___childrenProjectsJson___seo___description'
  | 'data___childrenProjectsJson___technologies'
  | 'data___childrenProjectsJson___languages'
  | 'data___childrenProjectsJson___gatsbyPath'
  | 'data___childrenProjectsJson___id'
  | 'data___childrenProjectsJson___parent___id'
  | 'data___childrenProjectsJson___parent___children'
  | 'data___childrenProjectsJson___children'
  | 'data___childrenProjectsJson___children___id'
  | 'data___childrenProjectsJson___children___children'
  | 'data___childrenProjectsJson___internal___content'
  | 'data___childrenProjectsJson___internal___contentDigest'
  | 'data___childrenProjectsJson___internal___description'
  | 'data___childrenProjectsJson___internal___fieldOwners'
  | 'data___childrenProjectsJson___internal___ignoreType'
  | 'data___childrenProjectsJson___internal___mediaType'
  | 'data___childrenProjectsJson___internal___owner'
  | 'data___childrenProjectsJson___internal___type'
  | 'data___childProjectsJson___fields___slug'
  | 'data___childProjectsJson___image___sourceInstanceName'
  | 'data___childProjectsJson___image___absolutePath'
  | 'data___childProjectsJson___image___relativePath'
  | 'data___childProjectsJson___image___extension'
  | 'data___childProjectsJson___image___size'
  | 'data___childProjectsJson___image___prettySize'
  | 'data___childProjectsJson___image___modifiedTime'
  | 'data___childProjectsJson___image___accessTime'
  | 'data___childProjectsJson___image___changeTime'
  | 'data___childProjectsJson___image___birthTime'
  | 'data___childProjectsJson___image___root'
  | 'data___childProjectsJson___image___dir'
  | 'data___childProjectsJson___image___base'
  | 'data___childProjectsJson___image___ext'
  | 'data___childProjectsJson___image___name'
  | 'data___childProjectsJson___image___relativeDirectory'
  | 'data___childProjectsJson___image___dev'
  | 'data___childProjectsJson___image___mode'
  | 'data___childProjectsJson___image___nlink'
  | 'data___childProjectsJson___image___uid'
  | 'data___childProjectsJson___image___gid'
  | 'data___childProjectsJson___image___rdev'
  | 'data___childProjectsJson___image___ino'
  | 'data___childProjectsJson___image___atimeMs'
  | 'data___childProjectsJson___image___mtimeMs'
  | 'data___childProjectsJson___image___ctimeMs'
  | 'data___childProjectsJson___image___atime'
  | 'data___childProjectsJson___image___mtime'
  | 'data___childProjectsJson___image___ctime'
  | 'data___childProjectsJson___image___birthtime'
  | 'data___childProjectsJson___image___birthtimeMs'
  | 'data___childProjectsJson___image___blksize'
  | 'data___childProjectsJson___image___blocks'
  | 'data___childProjectsJson___image___publicURL'
  | 'data___childProjectsJson___image___childrenImageSharp'
  | 'data___childProjectsJson___image___childrenProjectsJson'
  | 'data___childProjectsJson___image___childrenHeroJson'
  | 'data___childProjectsJson___image___childrenAboutJson'
  | 'data___childProjectsJson___image___childrenContactJson'
  | 'data___childProjectsJson___image___id'
  | 'data___childProjectsJson___image___children'
  | 'data___childProjectsJson___title'
  | 'data___childProjectsJson___body'
  | 'data___childProjectsJson___heroImage___label'
  | 'data___childProjectsJson___heroImage___alt'
  | 'data___childProjectsJson___heroImage___id'
  | 'data___childProjectsJson___heroImage___children'
  | 'data___childProjectsJson___seo___title'
  | 'data___childProjectsJson___seo___description'
  | 'data___childProjectsJson___technologies'
  | 'data___childProjectsJson___languages'
  | 'data___childProjectsJson___gatsbyPath'
  | 'data___childProjectsJson___id'
  | 'data___childProjectsJson___parent___id'
  | 'data___childProjectsJson___parent___children'
  | 'data___childProjectsJson___children'
  | 'data___childProjectsJson___children___id'
  | 'data___childProjectsJson___children___children'
  | 'data___childProjectsJson___internal___content'
  | 'data___childProjectsJson___internal___contentDigest'
  | 'data___childProjectsJson___internal___description'
  | 'data___childProjectsJson___internal___fieldOwners'
  | 'data___childProjectsJson___internal___ignoreType'
  | 'data___childProjectsJson___internal___mediaType'
  | 'data___childProjectsJson___internal___owner'
  | 'data___childProjectsJson___internal___type'
  | 'data___childrenHeroJson'
  | 'data___childrenHeroJson___fields___slug'
  | 'data___childrenHeroJson___title'
  | 'data___childrenHeroJson___heroImage___label'
  | 'data___childrenHeroJson___heroImage___alt'
  | 'data___childrenHeroJson___heroImage___id'
  | 'data___childrenHeroJson___heroImage___children'
  | 'data___childrenHeroJson___seo___title'
  | 'data___childrenHeroJson___seo___description'
  | 'data___childrenHeroJson___CTA___label'
  | 'data___childrenHeroJson___CTA___url'
  | 'data___childrenHeroJson___id'
  | 'data___childrenHeroJson___parent___id'
  | 'data___childrenHeroJson___parent___children'
  | 'data___childrenHeroJson___children'
  | 'data___childrenHeroJson___children___id'
  | 'data___childrenHeroJson___children___children'
  | 'data___childrenHeroJson___internal___content'
  | 'data___childrenHeroJson___internal___contentDigest'
  | 'data___childrenHeroJson___internal___description'
  | 'data___childrenHeroJson___internal___fieldOwners'
  | 'data___childrenHeroJson___internal___ignoreType'
  | 'data___childrenHeroJson___internal___mediaType'
  | 'data___childrenHeroJson___internal___owner'
  | 'data___childrenHeroJson___internal___type'
  | 'data___childHeroJson___fields___slug'
  | 'data___childHeroJson___title'
  | 'data___childHeroJson___heroImage___label'
  | 'data___childHeroJson___heroImage___alt'
  | 'data___childHeroJson___heroImage___id'
  | 'data___childHeroJson___heroImage___children'
  | 'data___childHeroJson___seo___title'
  | 'data___childHeroJson___seo___description'
  | 'data___childHeroJson___CTA___label'
  | 'data___childHeroJson___CTA___url'
  | 'data___childHeroJson___id'
  | 'data___childHeroJson___parent___id'
  | 'data___childHeroJson___parent___children'
  | 'data___childHeroJson___children'
  | 'data___childHeroJson___children___id'
  | 'data___childHeroJson___children___children'
  | 'data___childHeroJson___internal___content'
  | 'data___childHeroJson___internal___contentDigest'
  | 'data___childHeroJson___internal___description'
  | 'data___childHeroJson___internal___fieldOwners'
  | 'data___childHeroJson___internal___ignoreType'
  | 'data___childHeroJson___internal___mediaType'
  | 'data___childHeroJson___internal___owner'
  | 'data___childHeroJson___internal___type'
  | 'data___childrenAboutJson'
  | 'data___childrenAboutJson___fields___slug'
  | 'data___childrenAboutJson___title'
  | 'data___childrenAboutJson___body'
  | 'data___childrenAboutJson___languages'
  | 'data___childrenAboutJson___technologies'
  | 'data___childrenAboutJson___id'
  | 'data___childrenAboutJson___parent___id'
  | 'data___childrenAboutJson___parent___children'
  | 'data___childrenAboutJson___children'
  | 'data___childrenAboutJson___children___id'
  | 'data___childrenAboutJson___children___children'
  | 'data___childrenAboutJson___internal___content'
  | 'data___childrenAboutJson___internal___contentDigest'
  | 'data___childrenAboutJson___internal___description'
  | 'data___childrenAboutJson___internal___fieldOwners'
  | 'data___childrenAboutJson___internal___ignoreType'
  | 'data___childrenAboutJson___internal___mediaType'
  | 'data___childrenAboutJson___internal___owner'
  | 'data___childrenAboutJson___internal___type'
  | 'data___childAboutJson___fields___slug'
  | 'data___childAboutJson___title'
  | 'data___childAboutJson___body'
  | 'data___childAboutJson___languages'
  | 'data___childAboutJson___technologies'
  | 'data___childAboutJson___id'
  | 'data___childAboutJson___parent___id'
  | 'data___childAboutJson___parent___children'
  | 'data___childAboutJson___children'
  | 'data___childAboutJson___children___id'
  | 'data___childAboutJson___children___children'
  | 'data___childAboutJson___internal___content'
  | 'data___childAboutJson___internal___contentDigest'
  | 'data___childAboutJson___internal___description'
  | 'data___childAboutJson___internal___fieldOwners'
  | 'data___childAboutJson___internal___ignoreType'
  | 'data___childAboutJson___internal___mediaType'
  | 'data___childAboutJson___internal___owner'
  | 'data___childAboutJson___internal___type'
  | 'data___childrenContactJson'
  | 'data___childrenContactJson___fields___slug'
  | 'data___childrenContactJson___title'
  | 'data___childrenContactJson___body'
  | 'data___childrenContactJson___id'
  | 'data___childrenContactJson___parent___id'
  | 'data___childrenContactJson___parent___children'
  | 'data___childrenContactJson___children'
  | 'data___childrenContactJson___children___id'
  | 'data___childrenContactJson___children___children'
  | 'data___childrenContactJson___internal___content'
  | 'data___childrenContactJson___internal___contentDigest'
  | 'data___childrenContactJson___internal___description'
  | 'data___childrenContactJson___internal___fieldOwners'
  | 'data___childrenContactJson___internal___ignoreType'
  | 'data___childrenContactJson___internal___mediaType'
  | 'data___childrenContactJson___internal___owner'
  | 'data___childrenContactJson___internal___type'
  | 'data___childContactJson___fields___slug'
  | 'data___childContactJson___title'
  | 'data___childContactJson___body'
  | 'data___childContactJson___id'
  | 'data___childContactJson___parent___id'
  | 'data___childContactJson___parent___children'
  | 'data___childContactJson___children'
  | 'data___childContactJson___children___id'
  | 'data___childContactJson___children___children'
  | 'data___childContactJson___internal___content'
  | 'data___childContactJson___internal___contentDigest'
  | 'data___childContactJson___internal___description'
  | 'data___childContactJson___internal___fieldOwners'
  | 'data___childContactJson___internal___ignoreType'
  | 'data___childContactJson___internal___mediaType'
  | 'data___childContactJson___internal___owner'
  | 'data___childContactJson___internal___type'
  | 'data___id'
  | 'data___parent___id'
  | 'data___parent___parent___id'
  | 'data___parent___parent___children'
  | 'data___parent___children'
  | 'data___parent___children___id'
  | 'data___parent___children___children'
  | 'data___parent___internal___content'
  | 'data___parent___internal___contentDigest'
  | 'data___parent___internal___description'
  | 'data___parent___internal___fieldOwners'
  | 'data___parent___internal___ignoreType'
  | 'data___parent___internal___mediaType'
  | 'data___parent___internal___owner'
  | 'data___parent___internal___type'
  | 'data___children'
  | 'data___children___id'
  | 'data___children___parent___id'
  | 'data___children___parent___children'
  | 'data___children___children'
  | 'data___children___children___id'
  | 'data___children___children___children'
  | 'data___children___internal___content'
  | 'data___children___internal___contentDigest'
  | 'data___children___internal___description'
  | 'data___children___internal___fieldOwners'
  | 'data___children___internal___ignoreType'
  | 'data___children___internal___mediaType'
  | 'data___children___internal___owner'
  | 'data___children___internal___type'
  | 'data___internal___content'
  | 'data___internal___contentDigest'
  | 'data___internal___description'
  | 'data___internal___fieldOwners'
  | 'data___internal___ignoreType'
  | 'data___internal___mediaType'
  | 'data___internal___owner'
  | 'data___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContactJsonSeoImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContactJsonSeoImageEdge>;
  nodes: Array<ContactJsonSeoImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContactJsonSeoImageFilterInput = {
  data?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContactJsonSeoImageSortInput = {
  fields?: Maybe<Array<Maybe<ContactJsonSeoImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___postCssPlugins'
  | 'pluginOptions___postCssPlugins___purge'
  | 'pluginOptions___postCssPlugins___darkMode'
  | 'pluginOptions___defaults___formats'
  | 'pluginOptions___defaults___placeholder'
  | 'pluginOptions___defaults___breakpoints'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___codegenDelay'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___enableIdentityWidget'
  | 'pluginOptions___publicPath'
  | 'pluginOptions___manualInit'
  | 'pluginOptions___includeRobots'
  | 'pluginOptions___modulePath'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteTitleQueryQuery = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type MainPageQueryVariables = Exact<{ [key: string]: never; }>;


export type MainPageQuery = { allProjectsJson: { nodes: Array<(
      Pick<ProjectsJson, 'body' | 'title' | 'technologies' | 'languages'>
      & { seo?: Maybe<(
        Pick<ProjectsJsonSeo, 'description' | 'title'>
        & { image?: Maybe<(
          Pick<ProjectsJsonSeoImage, 'alt'>
          & { data?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
        )> }
      )>, heroImage?: Maybe<(
        Pick<ProjectsJsonHeroImage, 'label' | 'alt'>
        & { data?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )> }
    )> }, contactJson?: Maybe<Pick<ContactJson, 'body' | 'title'>>, heroJson?: Maybe<(
    Pick<HeroJson, 'title'>
    & { seo?: Maybe<(
      Pick<HeroJsonSeo, 'title' | 'description'>
      & { image?: Maybe<(
        Pick<HeroJsonSeoImage, 'alt'>
        & { data?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )> }
    )>, CTA?: Maybe<Pick<HeroJsonCta, 'label' | 'url'>>, heroImage?: Maybe<(
      Pick<HeroJsonHeroImage, 'alt' | 'label'>
      & { data?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )> }
  )>, aboutJson?: Maybe<Pick<AboutJson, 'body' | 'title' | 'technologies' | 'languages'>> };

export type ProjectQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ProjectQuery = { json?: Maybe<(
    Pick<ProjectsJson, 'body' | 'title'>
    & { seo?: Maybe<(
      Pick<ProjectsJsonSeo, 'description' | 'title'>
      & { image?: Maybe<(
        Pick<ProjectsJsonSeoImage, 'alt'>
        & { data?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
      )> }
    )>, heroImage?: Maybe<(
      Pick<ProjectsJsonHeroImage, 'label' | 'alt'>
      & { data?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )> }
  )> };
