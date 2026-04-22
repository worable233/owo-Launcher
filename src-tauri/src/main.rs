// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
// TODO:修改滚动条样式

fn main() {
    owo_launcher_lib::run()
}
