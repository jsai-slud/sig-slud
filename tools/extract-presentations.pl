#!/usr/bin/perl

use utf8;
use strict;

# usege: <this> < IN > OUT
# CFPから発表を一覧として抽出して，latex tabular formatで出力する．
# 前提1a/bは，コメントアウトで選択する．
#【前提1a】タイトルは，1桁または2桁の半角数字とピリオドで始まる行とその後続行．
#【前提1b】タイトルは，1桁または2桁の半角数字を括弧でくくって始まる行とその後続行．
#【前提2】発表者は，前提1のタイトルにそのまま後続し，間に空行等はない．

binmode STDIN, ":utf8";
binmode STDOUT, ":utf8";

my $LEN = 72;
if ($ARGV[0] ne "") {
    $LEN = $ARGV[0];
}

## extract lines that begins with numbers as title & authors
my $inItem = 0;
my @buffer = ();
print "\\begin{longtable}[c]{|p{1.5cm}|p{15cm}|}\n";
print "\\hline\n 推薦する & 演題 \\\\\n\\hline\n";
while(<>) {
    chomp; chomp;
    s/\s//g;
    if (length == 0 && $inItem) {
	# item（タイトル・著者）終了
	$inItem = 0;
	out();
    }
#    if (/\d?\d\./) { # 1a
    if (/\(\d?\d\)/) { # 1b
	if ($inItem) {
	    # item連続．これまでのbufferを出力して，bufferリセット
	    out();
	} else {
	    $inItem = 1;
	}
    }
    push(@buffer, $_) if ($inItem);
}
print "\\end{longtable}\n";

sub out {
    print'&'.join("\\\\\n&", @buffer)."\\\\\n\\hline\n";
    @buffer = ();
}
