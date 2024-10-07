// 用于对标题id和链接转换的函数
// 默认版本对数字开头做了额外处理，导致无法和默认Markdown数字开头标题链接对应
// string.js slugify drops non ascii chars so we have to
// use a custom implementation here
// @ts-ignore
import { remove as removeDiacritics } from 'diacritics'

// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g

export function slugify (str: string): string {
    return removeDiacritics(str)
        // Remove control characters
        .replace(rControl, '')
        // 将数字之间的点去掉
        .replace(/(\d+)\./g, "$1")
        // Replace special characters
        .replace(rSpecial, '-')
        // Remove continous separators
        .replace(/-{2,}/g, '-')
        // Remove prefixing and trailing separtors
        .replace(/^-+|-+$/g, '')
        // ensure it doesn't start with a number (#121)
        // .replace(/^(\d)/, '_$1')
        // lowercase
        .toLowerCase()
}