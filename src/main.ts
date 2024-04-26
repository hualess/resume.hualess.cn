import './css/index.less';

document.addEventListener('copy', (event) => {
  const { clipboardData } = event;
  const selection = document.getSelection();
  if (!clipboardData || !selection) return;
  const msg = `${selection.toString()}

💡 著作权归 hualess 所有，转载粘贴请注明出处
License: CC-BY-SA-4.0
Copyright: resume.hualess.cn
Github: github.com/cong-min/resume
`;
  clipboardData.setData('text/plain', msg);
  event.preventDefault();
});
