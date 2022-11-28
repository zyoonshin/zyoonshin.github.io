---
layout: default
---
# Linux

## 명령어를 다루는 명령어

### type
- 지정된 명령어가 쉘에 내장된 명령어인지, 외부 명령어인지, 앨리어스 명령어인지 등을 확인하는 명령어

```
[vagrant@host1 ~]$ type dir

dir is hashed (/usr/bin/dir)
```

-------------------------------

### which
- 명령어(command)의 위치(경로)를 알아내는 명령어

```
[vagrant@host1 ~]$ which dir

/usr/bin/dir
```

-------------------------------

### man
- 각종 명령어, 프로그램의 사용법(매뉴얼)을 보여주는 명령어

```
[vagrant@host1 ~]$ man dir

DIR(1)                                              User Commands                                              DIR(1)



NAME

       dir - list directory contents



SYNOPSIS

       dir [OPTION]... [FILE]...



DESCRIPTION

       List  information  about the FILEs (the current directory by default).  Sort entries alphabetically if none of

       -cftuvSUX nor --sort is specified.



       Mandatory arguments to long options are mandatory for short options too.



       -a, --all

              do not ignore entries starting with .



       -A, --almost-all

              do not list implied . and ..



       --author

              with -l, print the author of each file



       -b, --escape

              print C-style escapes for nongraphic characters



       --block-size=SIZE

              scale sizes by SIZE before printing them; e.g., '--block-size=M' prints sizes  in  units  of  1,048,576

              bytes; see SIZE format below
```

-------------------------------

### apropos
- 키워드를 포함하고 있는 명령어를 설명과 함께 출력하는 명령어
- man -k와 같음

```
[vagrant@host1 ~]$ apropos dir

addgnupghome (8)     - Create .gnupg home directories

alphasort (3)        - scan a directory for matching entries

basename (1)         - strip directory and suffix from filenames

basename (1p)        - return non-directory portion of a pathname

bdflush (2)          - start, flush, or tune buffer-dirty-flush daemon

cacertdir_rehash (8) - simple script to create or update hash links to certificate files in a directory

cd (1p)              - change the working directory

chacl (1)            - change the access control list of a file or directory

chdir (2)            - change working directory

chdir (3p)           - change working directory

chroot (1)           - run command or interactive shell with special root directory

chroot (2)           - change root directory

closedir (3)         - close a directory

closedir (3p)        - close a directory stream

cp (1)               - copy files and directories

```

-------------------------------

### info
- 리눅스 명령어의 사용 방법, 옵션 등을 나타냄
- 명령어 man에 비해 제공되는 명령어가 한정적
- man보다 상세화된 매뉴얼

```
[vagrant@host1 ~]$ info dir

File: coreutils.info,  Node: dir invocation,  Next: vdir invocation,  Prev: ls invocation,  Up: Directory listing



10.2 'dir': Briefly list directory contents

===========================================



'dir' is equivalent to 'ls -C -b'; that is, by default files are listed

in columns, sorted vertically, and special characters are represented by

backslash escape sequences.



   *Note 'ls': ls invocation.
```

-------------------------------

### whatis
- 명령어에 대한 기능을 간략하게 나타내는 명령어
- 자세한 사용법과 설명은  man, info로 확인
- 자신의 데이터베이스를 검색함

```
[vagrant@host1 ~]$ whatis dir

dir (1)              - list directory contents
```

-------------------------------

### alias
- 사용자가 명령어를 다른 이름으로 바꿔서 사용할 수 있는 쉘 내부 명령어
- alias를 통해서 일일이 입력하기 번거로운. 길이가 긴 명령어를 간단한 이름으로 바꿔서 등록하여 업무 효율을 높일 수 있음

```
alias : 현재 등록된 alias를 보여줌
alias a=명령어 : 명령어를 a로 간편하게 명칭
```

```
[vagrant@host1 ~]$ alias

alias egrep='egrep --color=auto'

alias fgrep='fgrep --color=auto'

alias grep='grep --color=auto'

alias l.='ls -d .* --color=auto'

alias ll='ls -l --color=auto'

alias ls='ls --color=auto'

alias which='alias | /usr/bin/which --tty-only --read-alias --show-dot --show-tilde'

```