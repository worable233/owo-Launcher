import { invoke } from '@tauri-apps/api/core'; // 调用 Tauri 函数

// 启动游戏函数
async function launchGame() {
  try {
    // 分步骤调用，便于前端展示进度
    await invoke('prepare_jre', { versionId: '1.20.1' });
    await invoke('validate_files', { versionId: '1.20.1' });
    await invoke('authenticate_player', { username: 'PlayerName' });
    await invoke('launch_game', { versionId: '1.20.1' });
  } catch (error) {
    console.error('启动失败:', error);
  }
}