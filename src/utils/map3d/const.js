let gxTypes = {
  BMLINE: "不明",
  DSLINE: "有线电视",
  DXLINE: "电信",
  EXLINE: "电力通讯",
  GDLINE: "供电",
  HSLINE: "雨污合流",
  JKLINE: "监控",
  JSLINE: "给水",
  JYLINE: "军用",
  LDLINE: "路灯",
  LTLINE: "联通",
  RSLINE: "热水",
  TRLINE: "天然气",
  TTLINE: "铁通",
  WSLINE: "污水",
  XHLINE: "信号",
  YDLINE: "移动",
  YSLINE: "雨水",
  ZQLINE: "蒸汽",
};

const ShaderCode = `
#version 300 es
uniform sampler2D colorTexture;
in vec2 v_textureCoordinates;
uniform float Hscale;
uniform float Sscale;
uniform float Vscale;

layout(location=0) out vec4 czm_fragColor;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec4 color = texture(colorTexture, v_textureCoordinates);//原始图像

  vec3 hsv = rgb2hsv(color.rgb);

  // Adjust HSV values (example: increase saturation)
  hsv.x *= Hscale;
  hsv.y *= Sscale;
  hsv.z *= Vscale;

  // Convert HSV back to RGB
  vec3 rgb = hsv2rgb(hsv);

  czm_fragColor = vec4(rgb, color.a);;
}`;
export { gxTypes, ShaderCode };
