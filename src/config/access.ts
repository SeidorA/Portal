// Configuración centralizada de listas de acceso

export const allowedEditors: string[] = [
  'jdtorres@seidoranalytics.com',
  'rstremel@seidoranalytics.com',
  'kochoa@seidoranalytics.com',
].map((e) => e.toLowerCase());

// Puedes separar allowedAdmins si quieres una lista distinta
export const allowedAdmins: string[] = allowedEditors;

export function isAllowedEditor(email?: string): boolean {
  const e = email?.toLowerCase();
  return !!e && allowedEditors.includes(e);
}

export function isAllowedAdmin(email?: string): boolean {
  const e = email?.toLowerCase();
  return !!e && allowedAdmins.includes(e);
}