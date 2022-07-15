import axios from 'axios';

export async function downloadFile() {
	const result = await axios.get('http://localhost:4000/file');
	const { blob, fileName } = result.data;
	const link = document.createElement('a');
	document.body.appendChild(link);

	const url = window.URL.createObjectURL(new Blob([blob]));
	link.href = url;
	link.download = fileName;
	link.click();
	window.URL.revokeObjectURL(url);
	document.body.removeChild(link);
	URL.revokeObjectURL(url);
}

export async function openFileInBrowser() {
	const result = await axios.get('http://localhost:4000/file');
	const { blob } = result.data;
	const fileBlob = new window.Blob([blob], { type: 'application/pdf' });
	const fileURL = URL.createObjectURL(fileBlob);
	window.open(fileURL);
}
