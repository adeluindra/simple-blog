---
title: "Belajar TypeScript untuk Pemula"
date: "2025-01-09"
excerpt: "Panduan singkat untuk memulai belajar TypeScript, dari instalasi hingga konsep dasar yang perlu dipahami."
---

# Belajar TypeScript untuk Pemula

TypeScript adalah superset dari JavaScript yang menambahkan static typing ke dalam bahasa pemrograman. Dengan TypeScript, kita bisa menangkap error lebih awal sebelum kode dijalankan.

## Kenapa TypeScript?

Ada beberapa alasan mengapa TypeScript semakin populer:

- **Type Safety**: Mengurangi bug dengan mendeteksi error saat development
- **Better IDE Support**: Autocomplete dan IntelliSense yang lebih baik
- **Maintainability**: Kode lebih mudah di-maintain dalam project besar
- **Modern JavaScript**: Support fitur-fitur JavaScript terbaru

## Instalasi

Untuk memulai dengan TypeScript, install terlebih dahulu:

\`\`\`bash
npm install -g typescript
\`\`\`

## Tipe Data Dasar

TypeScript memiliki beberapa tipe data dasar:

\`\`\`typescript
// String
let nama: string = "John Doe"

// Number
let umur: number = 25

// Boolean
let isActive: boolean = true

// Array
let hobi: string[] = ["coding", "reading", "gaming"]

// Object
let user: { name: string; age: number } = {
  name: "Jane",
  age: 30
}
\`\`\`

## Interface

Interface adalah cara untuk mendefinisikan struktur object:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  isAdmin?: boolean // optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
}
\`\`\`

## Function dengan TypeScript

TypeScript memungkinkan kita mendefinisikan tipe untuk parameter dan return value:

\`\`\`typescript
function greet(name: string): string {
  return `Hello, ${name}!`
}

const add = (a: number, b: number): number => {
  return a + b
}
\`\`\`

## Kesimpulan

TypeScript adalah tool yang sangat berguna untuk membuat aplikasi JavaScript yang lebih robust dan maintainable. Mulai gunakan TypeScript di project Anda berikutnya!
