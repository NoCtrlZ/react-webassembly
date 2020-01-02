extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
pub fn calculate(population: f32, error: f32) -> f32 {
    let reliability_coefficient: f32 = 1.96;
    let population_rate: f32 = 0.5;
    let left = error / reliability_coefficient;
    let one: f32 = 1.0;
    let down = population_rate * (one - population_rate);
    let right = one / down;
    let sample_size = population / (left * left * right);
    sample_size
}