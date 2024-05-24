import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vscode-extension-plugin.vue3-snippets', () => {
		vscode.window.showInformationMessage('张春节的plugin');
	});
}