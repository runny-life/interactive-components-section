const avatars = import.meta.glob('../assets/avatars/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function getAvatar(serverPath) {
  const filename = serverPath.split('/').at(-1);
  const key = `../assets/avatars/${filename}`;
  console.log(filename, key);
  return avatars[key] || '';
}
