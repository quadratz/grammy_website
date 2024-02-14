import index from "./index.json" with { type: "json" };

export function currentVersions(str: string) {
  for (const [source, target] of Object.entries(index)) {
    str = str.replaceAll(source, target);
  }
  return str;
}
