// Type declarations for side-effect imports of CSS and static assets
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
declare module "*.ttf";
declare module "*.otf";
