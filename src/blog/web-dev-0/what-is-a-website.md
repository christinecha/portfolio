A website is literally a location - a "site" - on the internet. You can view that location through a web browser (Chrome, Firefox, or Netscape Navigator), and what you see when it loads up is a representation of that website.

![Pointing to a website, which is the content rendered by a browser.](/assets/images/web-dev-0/website-anatomy.png)

## How does my computer know what stuff to show?

When you use a web address, it's kind of like making a phone call. You direct your request towards a unique web address (like "www.duckduckgo.com"), just like your call requests a specific phone number. The internet companies involved then do a bunch of work to make sure you see the right website.

You could go further to say that seeing the website is like hearing a voicemail. Someone somewhere uploaded an audio file, and that same file gets played to you every time you call. Except, in the case of a website,it's usually a combination of a whole bunch of different files instead of just one audio file.

<!-- > ILLUSTRATION: process of requesting & receiving website? maybe in parallel with the phone call process? -->

## Using your own files

Click to download this file: <a href="data:text/plain;charset=UTF-8,Meow! I am a cat! 🐱" download="cat.txt">cat.txt</a>. It should just be a plain text file with some words inside.

Now, try opening it in your browser! You can either:

- find the file in your computer's file viewer (ex. Windows Explorer or Mac Finder), right click, and "Open With" the browser of your choice.
- or open your browser first, and select the file from there. (For example in Chrome, you'd need to go to File > Open File.)

<!-- ![Using a local filepath in your browser](./assets/00/local-url.png) -->

Now you should see something like this:

![Viewing a local file in your browser](/assets/images/web-dev-0/local-url-open.png)

Amazing! In essence, this is all a website is: files at a specific location (in this case, just on your computer somewhere) opened in a browser.

## Quick Dive: Filepaths

The action above of "opening a file" in your browser is just a shortcut. What it's actually doing is manually entering your file's exact location (the thing that looks similar to `/Users/cha/Desktop/cat.txt`) into the address bar (where you'd normally write something like `www.ebay.com`).

That bit of text describing the file's location is called the `filepath` - since it's quite literally the "path" you need to take to find the file.

In this case, my file is in a folder called "Desktop" inside a folder called "cha" inside a folder called "Users."

## What is code?

Your file right now is just a plaintext\* file. You can tell by the `.txt` extension at the end.

\*_`plaintext` is actually the technical term here for the file type, not just a descriptive phrase!_

Other file types (`.html`, `.js`, etc.) contain **code**.

Code is just a set of instructions humans can write for machines to read. Code files also just contain text, but each type has different and very particular rules.

Technically, you can write code on any program\* on your computer that lets you write text, like TextEdit or Notepad, as long as you can save the file with the correct extension.

_\*Programs like Microsoft Word save a bunch of other data with your text - formatting, preferences, and other data - which is why they use their own specific `.doc` or `.docx` extension on these files. If you open one of these in TextEdit, you'll see a bunch of wacky symbols and whatnot; clearly not human-readable text._

## How can a machine read my human instructions?

Think of it like a massive chain of translations. A machine on its own has no understanding of your textual instructions. The only thing that affects a hunk of metal is whether electricity is flowing (often presented by 1) or not (0). That's where all the memes about hackers using binary (01010111010110100010100101) come from; at the end of the day, that sequence is all the machines understand.

At some point, some human was like, what if we group these signals into unique patterns? 01000001 = A, 01000010 = B, so on and so forth. (These are the real patterns, by the way!)

That way, instead of having to write "010000010100001001000011" every time, you could just write "ABC" and automate the translation - way easier. And then we kept repeating this process.

<!-- > ILLUSTRATION: like the game of telephone, we're passing a message through multiple layers of translators -->

So a "programming language", then, is just one of these translation layers. In technical terms, the closer you get to the 0's and 1's side, the "lower level" the language is. A higher level language is more layers away, so it usually feels easier for humans to read and write.

<!-- > ILLUSTRATION: https://mrgcoding.com/wp-content/uploads/2020/06/language-spectrum.png maybe some robots/machines at one end & people at the other? -->

So when you learn JavaScript, one of the higher level languages, you can write something as simple and human-legible as `var x = 9` (setting a variable X to the value 9). It feels almost like magic that the computer can "understand" you, but it's just layers and layers of work from engineers past that you can now build on top of.

## How do I create these code files?

As mentioned previously, you can technically use any program as long as it can output plain text, like TextEdit or Notepad.

However, it might be useful for you to install a text editing application that is meant specifically for programmers, usually called a "text editor" or "I.D.E." ("Integrated Development Environment", with the acronym usually pronounced as individual letters). These applications have built-in tools specifically for coding, and can be extremely helpful.

Most of these programs are free so you can always just download one and replace it later to your preferences.

Here are some free options:

- [VS Code](https://code.visualstudio.com/download)
- [Atom](https://atom.io/)
- [Sublime Text](https://www.sublimetext.com/)

Download one of these (or another text editor of your choosing) and you'll be ready to write!

<!-- Here's [a bit more guidance about how to use it effectively](text-editor-basics.html). -->

_(Some developers can be a bit evangelical on this subject - I suggest you kindly ignore them and choose whatever you like best, for whatever reason. Just for reference, I started with Sublime, moved to Atom next, and currently use VS Code.)_

Try opening up your `txt` file in this text editor. There a lot of different ways to do this (drag the file onto the program icon, use "Open with" again, open it from the text editor via File > Open, etc.) - play around with them and see what's most convenient for you.

Once you have it open, you should be able to edit the text. Write whatever you want in there, hit Save, and refresh the browser tab where it's open - you should see it immediately update to your recent changes.

Congratulations, you're editing your first website! ✨
