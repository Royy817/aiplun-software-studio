export function withSelectedWork(message, work) {
  const remaining = message.replace(/^相談したい業務: [^\r\n]*(?:\r?\n)?/, '');
  return `相談したい業務: ${work}${remaining ? `\n${remaining}` : ''}`;
}
