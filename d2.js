(function(){ var S = window.ISRO.sets[0].q;
function P(o){ S.push(o); }

P({n:36,s:"Programming & C Language",q:"<pre>int *ptr;\nptr = new int[4];</pre>Which statement may make the program crash when executed subsequently?",
 o:["<span class='mono'>ptr++;</span>","<span class='mono'>ptr += 3;</span>","<span class='mono'>ptr[4] = 0x16;</span>","<span class='mono'>ptr = null;</span>"],a:2,
 e:"Valid indices are 0&ndash;3, so <span class='mono'>ptr[4]</span> writes one past the end &mdash; heap corruption. The other three only move or reassign the pointer; none dereferences it.",
 c:"<b>Only a dereference can fault.</b> When scanning options for memory bugs look for <span class='mono'>*p</span>, <span class='mono'>p[i]</span>, <span class='mono'>p-&gt;f</span>. Pointer arithmetic to one-past-the-end is legal; <i>dereferencing</i> it is undefined. Note option D leaks the allocation and destroys the pointer needed for <span class='mono'>delete[]</span>."});

P({n:37,s:"Compiler Design",q:"Which tool generates a parser from BNF notation?",o:["lex","yacc","ed","gdb"],a:1,
 e:"yacc takes BNF productions and generates an LALR(1) bottom-up parser. lex generates a <i>scanner</i> from regular expressions.",
 c:"The split mirrors the Chomsky hierarchy: tokens are a <b>regular</b> language (finite automaton, so regex &rarr; lex); syntax is <b>context-free</b> (needs a stack, so BNF &rarr; yacc). They pair up &mdash; the generated parser calls <span class='mono'>yylex()</span>."});

P({n:38,s:"Compiler Design",q:"Which compiler phase receives tokenized output?",o:["Lexical Analyser","Parser","&mdash;","&mdash;"],a:1,
 e:"The lexical analyser <i>produces</i> tokens; the parser <i>consumes</i> them into a parse tree. Option A is the producer &mdash; the standard reversal trap.",
 c:"Error ownership by phase: <span class='mono'>int 5x;</span> &rarr; lexical. Missing semicolon &rarr; syntax. <span class='mono'>int x = \"hi\";</span> or undeclared variable &rarr; semantic. A <b>lexeme</b> is the matched characters, a <b>token</b> is the category plus attribute."});

P({n:39,s:"Object Oriented Programming & Java",q:"Which is true for a Virtual Machine like JVM?",
 o:["Hardware dependent","Hardware independent","Bytecode is part of VM","Links object code"],a:0,
 e:"Bytecode is platform independent; the <b>JVM itself is platform specific</b> &mdash; you download a different binary per OS and CPU. That is exactly how &ldquo;write once, run anywhere&rdquo; works.",
 c:"JDK &sup; JRE &sup; JVM. The same pattern recurs in .NET's CLR and Python &mdash; portability always lives in the <i>intermediate format</i>, never in the runtime.",
 w:"&ldquo;Java is platform independent&rdquo; is drilled in hard. Read <i>which component</i> the question names."});

P({n:40,s:"Theory of Computation",q:"Which hexadecimal constant matches <span class='mono'>(0x[0-9A-F]+)</span>?",
 o:["<span class='mono'>0x4C5</span>","<span class='mono'>0x50b</span>","<span class='mono'>04A</span>","<span class='mono'>0x</span>"],a:0,
 e:"B fails on the <i>lowercase</i> b &mdash; <span class='mono'>[0-9A-F]</span> is uppercase only. C has no <span class='mono'>0x</span> prefix. D has the prefix but <span class='mono'>+</span> demands at least one digit.",
 c:"<b>*</b> = zero or more, <b>+</b> = one or more, <b>?</b> = zero or one. Character classes are <b>case sensitive</b>. A pattern accepting both cases would be <span class='mono'>0[xX][0-9A-Fa-f]+</span>."});

P({n:41,s:"AI, Data Science & Cloud",q:"Primary purpose of HDFS in Big Data storage?",
 o:["To compress files","To store in-memory data","To store relational data","To store large files across multiple machines"],a:3,
 e:"HDFS splits very large files into blocks spread across a cluster of commodity machines.",
 c:"<b>NameNode</b> holds namespace and block map in memory; <b>DataNodes</b> hold blocks. Block size 128 MB default, replication factor 3, rack-aware. Write-once read-many, optimised for throughput not latency; poor at many small files. &ldquo;In-memory&rdquo; describes <b>Spark</b>, not HDFS.",
 w:"HDFS appeared in both 2023 (Q33) and 2025 (Q41). It is near-certain to return."});

P({n:42,s:"AI, Data Science & Cloud",q:"Which is <b>not</b> a characteristic of Big Data?",o:["Velocity","Visualisation","Volume","Variety"],a:1,
 e:"The Vs are Volume, Velocity, Variety, plus Veracity and Value. Visualisation is a technique for <i>presenting</i> data, not a property of it.",
 c:"Volume = scale, Velocity = speed of arrival, Variety = structured/semi/unstructured, Veracity = noise and uncertainty, Value = usefulness extracted. Gartner's original 2001 definition had only the first three.",
 w:"Distractor pattern: plausible V-words that are <i>activities</i> rather than <i>properties</i> &mdash; visualisation, validation, virtualisation."});

P({n:43,s:"Operating System",q:"Hypervisors: (P) runs on host physical hardware, (Q) hosted hypervisor, (R) runs on the OS of the physical host, (S) bare metal hypervisor. Correct match?",
 o:["Type-1: (P),(Q); Type-2: (R),(S)","Type-1: (P),(S); Type-2: (Q),(R)","Type-1: (R),(S); Type-2: (P),(Q)","Type-1: (R),(Q); Type-2: (P),(S)"],a:1,
 e:"&ldquo;Bare metal&rdquo; and &ldquo;runs on physical hardware&rdquo; are the same thing, so (P)(S) pair. &ldquo;Hosted&rdquo; and &ldquo;runs on the host OS&rdquo; are the same, so (Q)(R) pair. Only option B groups them that way.",
 c:"<b>Solve matching questions by synonym grouping.</b> Two items are usually restatements of each other; find the pairs and check which option keeps them together &mdash; this works even when you can't recall which label is which. Type-1: ESXi, Hyper-V, Xen, KVM. Type-2: VMware Workstation, VirtualBox."});

P({n:44,s:"AI, Data Science & Cloud",q:"A decision tree in AI can be used for",
 o:["Only classification tasks","Only regression tasks","Both classification and regression tasks","Neither"],a:2,
 e:"Same structure; only leaves and splitting criterion differ. Classification leaves hold a class (split on information gain / Gini); regression leaves hold a mean (split on variance reduction).",
 c:"CART literally stands for <b>Classification And Regression Trees</b>. Entropy = &minus;&Sigma;p log&#8322;p; Gini = 1 &minus; &Sigma;p&sup2;. Weakness is high variance &rarr; fixed by pruning or ensembles: <b>Random Forest</b> (bagging, cuts variance) and <b>Gradient Boosting</b> (sequential, cuts bias)."});

P({n:45,s:"AI, Data Science & Cloud",q:"Which is an advantage of Artificial Intelligence?",
 o:["Identifying a business trend for decision making","Helps analysis of cyber security incidents","Solves a pattern recognition problem via learning","All of the above"],a:3,
 e:"All three are genuine, non-contradictory applications.",
 c:"<b>Falsification is the fast method:</b> look for one option that is definitely wrong. If none is, take &ldquo;all of the above&rdquo; and move on. It is <i>unlikely</i> when options contradict, when one contains an absolute, or when one is a known limitation rather than a benefit."});

P({n:46,s:"AI, Data Science & Cloud",q:"Which is <b>not</b> a type of Artificial Intelligence agent?",
 o:["Simple AI agent","Unity based AI agent","Learning AI agent","Goal based AI agent"],a:1,
 e:"Unity is a game engine. The five standard types are simple reflex, model-based reflex, goal-based, utility-based, and learning.",
 c:"Progression: reflex acts on current percept only &rarr; model-based tracks unobserved state &rarr; goal-based plans ahead &rarr; utility-based prefers <i>better</i> goal states &rarr; learning improves from experience. Task specification framework is <b>PEAS</b>: Performance, Environment, Actuators, Sensors.",
 w:"In &ldquo;not a type of&rdquo; questions, scan for the option that sounds like a <i>product or brand</i> rather than a category. It is almost always the intruder."});

P({n:47,s:"Computer Networks",q:"Which defines the format for Public Key Infrastructure?",o:["X.25","X.509","IEEE 802.11","IEEE 802.3"],a:1,
 e:"X.509 is the ITU-T standard for public key certificates.",
 c:"<b>X.5xx numbers = directories and identity. IEEE 802.x = LAN physical and link layers.</b> That split alone answers most standards-recall questions. X.25 is legacy packet-switched WAN; 802.3 Ethernet; 802.11 Wi-Fi; 802.15 Bluetooth; 802.1X port access control. A certificate carries subject, public key, validity, issuer and the CA's signature."});

P({n:48,s:"Computer Networks",q:"Match: (i) Non-repudiation (ii) Data Integrity (iii) Data Confidentiality (iv) Access Control &mdash; with (P) protection from unauthorised disclosure, (Q) prevention of unauthorised use of a resource, (R) protection against denial of having participated, (S) assurance data arrived exactly as sent.",
 o:["(i)R (ii)P (iii)Q (iv)S","(i)R (ii)S (iii)P (iv)Q","(i)P (ii)R (iii)S (iv)Q","(i)R (ii)Q (iii)P (iv)S"],a:1,
 e:"Repudiate = deny &rarr; R. Integrity = &ldquo;exactly as sent&rdquo; &rarr; S. Confidentiality = disclosure &rarr; P. Access control = use of a resource &rarr; Q.",
 c:"<b>Non-repudiation requires a digital signature</b> &mdash; a MAC cannot provide it, because both parties share the key so either could have produced it. Integrity and authentication <i>can</i> come from symmetric MACs. That distinction is the one most often tested.",
 w:"(P) and (Q) both start with &ldquo;unauthorised&rdquo;. Disclosure is about <i>reading</i>; use of a resource is about <i>doing</i>. Underline the verb."});

P({n:49,s:"Discrete Mathematics",f:1,q:"What is the chromatic number of the graph shown below?",o:["3","4","5","6"],a:0,
 e:"Graph is an image. An answer of 3 typically means a planar graph containing a triangle or odd cycle but no K&#8324;.",
 c:"Squeeze from both sides. <b>Lower:</b> &chi; &ge; largest clique; &chi; = 2 iff bipartite iff <i>no odd cycle</i>, so any triangle forces &chi; &ge; 3. <b>Upper:</b> &chi; &le; &Delta;+1, and the <b>four colour theorem</b> caps any planar graph at 4 &mdash; which eliminates options 5 and 6 on sight. Standards: &chi;(K<sub>n</sub>)=n, &chi;(C<sub>n</sub>)=2 or 3, &chi;(tree)=2."});

P({n:50,s:"Discrete Mathematics",q:"20 shopping malls interconnected by roads, each reachable through 3 different roads, roads don't cross. Maximum parks in the regions enclosed by roads?",
 o:["12","30","60","11"],a:0,
 e:"3-regular with V=20 &rArr; E = 20&times;3/2 = 30. Euler: 20 &minus; 30 + F = 2 &rArr; F = 12. The official key takes F = 12. <b>Note:</b> F counts the unbounded outer face too, so genuinely <i>enclosed</i> regions number 11 &mdash; which is option D. This question turns on a convention, not the mathematics.",
 c:"<b>Euler: V &minus; E + F = 2</b> (connected planar). <b>Handshaking: &Sigma;deg = 2E</b>, so a k-regular graph has E = nk/2. Planarity bound E &le; 3V &minus; 6 (here 30 &le; 54 &check;). Kuratowski: planar iff no K&#8325; or K<sub>3,3</sub> subdivision.",
 w:"Options 30 and 60 are E and 2E &mdash; intermediate values you compute on the way. Carry through to Euler."});

P({n:51,s:"Algorithms",q:"Huffman coding works on the principle of",
 o:["Randomization of symbols","Key based portioning of symbols","Hashing of symbols","Frequencies of input symbols"],a:3,
 e:"Shorter codewords for more frequent symbols; frequency is the only input.",
 c:"Greedy: repeatedly merge the two lowest-frequency nodes. O(n log n). Produces a <b>prefix-free</b> code (symbols only at leaves) and is <b>optimal</b> among prefix codes. Average length L satisfies H &le; L &lt; H+1. It is the standard example of a provably-optimal greedy algorithm, alongside Kruskal, Prim, Dijkstra and fractional knapsack."});

P({n:52,s:"Data Structures",f:1,q:"Inorder traversal of the tree shown gives",
 o:["a, b, d, h, e, i, j, c, f, g, k","h, d, i, j, e, b, f, k, g, c, a","h, d, b, i, e, j, a, f, c, k, g","h, d, b, e, i, j, a, f, c, k, g"],a:2,
 e:"Option A starts with the root &rarr; preorder. Option B ends with the root &rarr; postorder. Both discardable without the figure. C and D differ only in b,e,i: in C, <b>e sits between i and j</b> &mdash; consistent with e having left child i and right child j, which is the inorder pattern. D has e before both, which is preorder for that subtree.",
 c:"<b>Locate the root and check its position:</b> first &rarr; preorder, middle &rarr; inorder, last &rarr; postorder. That alone halves the options in every traversal question. Inorder of a BST gives sorted order. Reconstruction: Inorder+Preorder &check;, Inorder+Postorder &check;, Preorder+Postorder &cross; (not unique). Inorder is required in every working combination."});

P({n:53,s:"Theory of Computation",q:"R = (a*b)* + (b*a)* over {a,b}. Which expression describes the same language?",
 o:["(a*b*) + (b*a*)","a* + b*","(a+b)*","a*b + b*a"],a:2,
 e:"(a*b)* = &epsilon; or any string <i>ending in b</i>. (b*a)* = &epsilon; or any string <i>ending in a</i>. Every non-empty string ends in a or b, and &epsilon; is in both &mdash; so the union is everything.",
 c:"<b>Characterise a starred expression by its last symbol.</b> To disprove equality find one witness: <span class='mono'>aba</span> is in R but not in a*b* (which means all a's then all b's) &mdash; that single string kills three options.",
 w:"(a*b*) and (a*b)* look alike but differ enormously. Where the star sits relative to the parentheses is the whole question."});

P({n:54,s:"Software Engineering",q:"Domain characteristics: inputs 30&times;4, outputs 60&times;5, enquiries 20&times;4, files 5&times;10, interfaces 4&times;7. All complexity adjustment values are average, scale = 3. The function point value is",
 o:["681.46","186.46","816.46","618.46"],a:3,
 e:"UFP = 120+300+80+50+28 = 578. There are <b>14</b> general system characteristics, all 3, so &Sigma;F = 42 and CAF = 0.65 + 0.42 = 1.07. FP = 578 &times; 1.07 = <b>618.46</b>.",
 c:"<b>CAF = 0.65 + 0.01&times;&Sigma;F<sub>i</sub></b> over <b>14</b> characteristics, each 0&ndash;5. So CAF ranges 0.65&ndash;1.35 &mdash; use that as a sanity check: FP can never be more than 1.35&times; or less than 0.65&times; UFP. Average weights are 4, 5, 4, 10, 7 &mdash; exactly the ones given here.",
 w:"The single most common error is the count of characteristics. It is 14, not 15 and not 5. Every distractor is a specific arithmetic slip."});

P({n:55,s:"Software Engineering",q:"For a function X: (i) Fan-in is the number of functions calling X. (ii) Fan-out is the number called by X. (iii) High fan-in means X is tightly coupled to the design. (iv) High fan-out means X's complexity may be high. Which is correct?",
 o:["Only (i) and (ii)","Only (i) and (iii)","Only (ii) and (iv)","All four are true"],a:3,
 e:"All four are the standard definitions and interpretations.",
 c:"Ideal shape is <b>high fan-in, low fan-out</b> at lower layers. Coupling worst&rarr;best: content, common, external, control, stamp, data. Cohesion worst&rarr;best: coincidental, logical, temporal, procedural, communicational, sequential, functional.",
 w:"Candidates talk themselves out of &ldquo;all four&rdquo; by arguing high fan-in is <i>good</i> so it can't mean tight coupling. Good and tightly-coupled aren't contradictory. Judge whether the statement is <b>accurate</b>, not whether it is desirable."});

P({n:56,s:"Software Engineering",q:"Correct order for the stages of software Risk Management?",
 o:["Identification &rarr; Planning &rarr; Analysis &rarr; Monitoring","Planning &rarr; Identification &rarr; Analysis &rarr; Monitoring","Analysis &rarr; Identification &rarr; Planning &rarr; Monitoring","Identification &rarr; Analysis &rarr; Planning &rarr; Monitoring"],a:3,
 e:"Each stage consumes the previous one's output: you cannot analyse an unidentified risk, nor plan for one whose severity you haven't assessed.",
 c:"Risk categories: <b>project</b> (schedule, resources), <b>product</b> (quality), <b>business</b> (organisational). Planning strategies: avoidance, minimisation, contingency. Risk exposure = probability &times; impact, which is what ranks risks during analysis."});

P({n:57,s:"Operating System",q:"With 3 frames, the number of page faults using <b>Optimal</b> replacement for 6, 0, 5, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 5, 2 is",
 o:["15 Page Faults","9 Page Faults","12 Page Faults","8 Page Faults"],a:3,
 e:"Faults at steps 1,2,3,4,6,8,11,14 = <b>8</b>. Key evictions: step 4 drops 6 (never reappears), step 6 drops 5 (next use is last), step 8 drops 0 (furthest ahead), step 11 drops 4, step 14 drops 0 or 3 (neither reappears).",
 c:"Optimal looks <b>forward</b>; LRU looks <b>backward</b>; FIFO uses arrival order. <b>Pages that never reappear are always evicted first</b> &mdash; checking for those costs nothing and resolves most decisions. Floor check: the first k distinct pages always fault, so with 6 distinct pages the answer is at least 6.",
 w:"Optimal always gives the <i>fewest</i> faults, so its answer should be the smallest plausible number &mdash; a useful cross-check. Option 15 is simply the reference count. Belady's anomaly affects FIFO only."});

P({n:58,s:"Operating System",q:"3 processes, A=10/B=5/C=7 instances. Allocation P0(0,1,0) P1(2,0,0) P2(3,0,2); Max P0(7,5,3) P1(3,2,2) P2(9,0,2); Available (5,4,5). Which is true?",
 o:["The system is not in safe state","The system is blocked","The system is in safe state","The request cannot be granted to all processes"],a:2,
 e:"Need = Max &minus; Allocation: P0(7,4,3), P1(1,2,2), P2(6,0,0). P1 fits (5,4,5) &rarr; Work becomes (7,4,5); P2 fits &rarr; (10,4,7); P0 fits. Safe sequence &lang;P1,P2,P0&rang; exists.",
 c:"Safety algorithm: Work &larr; Available; find any i with Need<sub>i</sub> &le; Work for <b>every</b> resource type; add its Allocation back; repeat. <b>Safe &ne; no deadlock possible</b> &mdash; unsafe means deadlock is <i>possible</i>, not that it has occurred. Coffman conditions: mutual exclusion, hold and wait, no preemption, circular wait.",
 w:"Candidates test only P0, see 7 &gt; 5, and declare unsafe. You must test <b>all</b> processes each round &mdash; the algorithm fails only when none fits."});

P({n:59,s:"Operating System",q:"FCFS with P1(arrival 6, burst 24), P2(arrival 0, burst 3), P3(arrival 3, burst 3). Average turnaround and waiting time?",
 o:["Avg TAT 30 ms, Avg WT 4.5 ms","(option text truncated in capture)","Official key &mdash; see computation","(option text truncated in capture)"],a:2,
 e:"Order by arrival: P2 (0&ndash;3), P3 (3&ndash;6), P1 (6&ndash;30). TAT = 3, 3, 24 &rArr; <b>average 10 ms</b>. Every WT is 0 because each process arrives exactly as the CPU frees. <b>Note:</b> options B/C/D were truncated when the paper was captured &mdash; match this computation against option C in the real paper.",
 c:"TAT = Completion &minus; Arrival; WT = TAT &minus; Burst. FCFS suffers the <b>convoy effect</b>: reorder so P1 (burst 24) arrives first and average WT jumps from 0 to 16 with identical work. SJF is provably optimal for average WT among non-preemptive algorithms; SRTF optimal overall; Round Robin optimises response time."});

P({n:60,s:"Operating System",q:"Which transition between process states is <b>not</b> possible?",
 o:["Run &rarr; Ready","Run &rarr; Terminated","Run &rarr; Waiting","Waiting &rarr; Run"],a:3,
 e:"A process leaving Waiting goes back to the <b>Ready queue</b> and must be rescheduled. It never returns directly to the CPU.",
 c:"<b>The CPU is only ever entered from Ready</b>, because entering it is the scheduler's decision and the scheduler picks from the ready queue. Two impossible transitions worth memorising: Waiting&rarr;Running, and <b>Ready&rarr;Waiting</b> (a process must be executing to issue I/O).",
 w:"Run&rarr;Ready looks wrong if you only know non-preemptive models. It is preemption, which every modern OS uses."});

P({n:61,s:"Operating System",q:"Which is true when a parent process creates a new child process?",
 o:["The parent continues to execute concurrently with its children","The parent waits until some or all children terminate","The parent waits by issuing a signal() system call","Both (a) and (b)"],a:0,
 e:"Official key is A. Option C is definitely wrong &mdash; a parent waits with <span class='mono'>wait()</span>, not <span class='mono'>signal()</span>. <b>Caveat:</b> Silberschatz presents <i>both</i> possibilities, so option D is arguably defensible and this question has been disputed. The key treats concurrent execution as the default after <span class='mono'>fork()</span>, which is factually correct.",
 c:"<span class='mono'>fork()</span> returns <b>0 in the child, the child's PID in the parent</b>. <span class='mono'>exec()</span> replaces the image and never returns on success. <b>n successive forks produce 2<sup>n</sup> processes</b> &mdash; a very common calculation. <b>Zombie</b>: child terminated, parent hasn't called wait(). <b>Orphan</b>: parent died, child reparented to init."});

P({n:62,s:"Discrete Mathematics",q:"If A is a set with m elements and n is a positive integer, the number of distinct elements in A<sup>n</sup> is",
 o:["m &times; n","m &times; m","n<sup>m</sup>","m<sup>n</sup>"],a:3,
 e:"A<sup>n</sup> is the set of ordered n-tuples; each of n coordinates has m choices independently, giving m<sup>n</sup>. Check with A={0,1}, n=3: eight tuples, and 2&sup3;=8 &check; while 3&sup2;=9 &cross;.",
 c:"<b>Base = choices per position, exponent = number of positions.</b> That rule covers all of them: A<sup>n</sup> &rarr; m<sup>n</sup>; power set &rarr; 2<sup>m</sup>; functions A&rarr;B &rarr; |B|<sup>|A|</sup> (|A| positions, |B| choices); relations on A &rarr; 2<sup>m&sup2;</sup>.",
 w:"When a formula has a base and exponent that could be swapped, substitute two small <b>unequal</b> numbers &mdash; equal ones won't distinguish them."});

P({n:63,s:"Discrete Mathematics",q:"How many subsets of {1,2,&hellip;,12} have no two consecutive elements?",o:["144","377","610","89"],a:1,
 e:"f(n) = f(n&minus;1) + f(n&minus;2), conditioning on whether n is included. With f(0)=1, f(1)=2 the sequence runs 1,2,3,5,8,13,21,34,55,89,144,233,<b>377</b>.",
 c:"This is F<sub>n+2</sub>. The same count appears as <b>binary strings of length n with no two adjacent 1s</b> &mdash; literally the same problem. Exactly k elements, no two consecutive, from n: C(n&minus;k+1, k). <b>Arranged in a circle it becomes the Lucas number L<sub>n</sub></b>, not F<sub>n+2</sub> &mdash; check linear vs circular.",
 w:"Every distractor is a Fibonacci number (89, 144, 377, 610). Recognising the recurrence isn't enough; build the table from f(0)=1, f(1)=2 rather than quoting the offset from memory."});

P({n:64,s:"Discrete Mathematics",q:"(p &and; q) &rarr; r is equivalent to",
 o:["&not;r &rarr; (p &and; q)","p &rarr; (q &and; r)","&not;p &or; &not;q &or; r","None of the above"],a:2,
 e:"X &rarr; Y &equiv; &not;X &or; Y gives &not;(p&and;q) &or; r, then De Morgan gives &not;p &or; &not;q &or; r. Option A isn't the contrapositive &mdash; that would be &not;r &rarr; (&not;p &or; &not;q).",
 c:"<b>p &rarr; q &equiv; &not;p &or; q</b> is the single most useful rewrite. Contrapositive always valid; converse and inverse never. <b>Exportation:</b> (p&and;q)&rarr;r &equiv; p&rarr;(q&rarr;r) &mdash; note the inner connective is &rarr;, not &and;, which is what makes option B wrong. &not;(p&rarr;q) &equiv; p &and; &not;q.",
 w:"Whenever an option looks like a contrapositive, check that <b>both</b> sides were negated as well as swapped."});

P({n:65,s:"Digital Logic & Design",q:"Which is <b>not</b> true for a gated D-type flip-flop?",
 o:["When clock is high, D passes through to Q","Stores a single bit of data","Uses a clock signal to control when D transfers to Q","When clock is low, D passes through to Q"],a:3,
 e:"A gated (level-triggered) D latch with active-high enable is transparent while the clock is <b>high</b> and holds while low. Option D contradicts option A.",
 c:"<b>In &ldquo;not true&rdquo; questions look for a contradictory pair first</b> &mdash; one of the two is the answer and the rest need no evaluation. Latch = level-triggered and transparent; flip-flop = edge-triggered and never transparent. Characteristic equations: D: Q&#8329;&#8330;&#8321;=D; JK: J&#x305;Q&#772;+K&#772;Q; T: T&oplus;Q."});

P({n:66,s:"Digital Logic & Design",q:"A MOD-16 ripple counter using J-K flip-flops is at state 1001. How many clock pulses to reach 0000?",
 o:["8","6","7","5"],a:2,
 e:"1001 = 9. Counting 9&rarr;10&rarr;11&rarr;12&rarr;13&rarr;14&rarr;15&rarr;0 is <b>7</b> transitions. Formula: (t &minus; s) mod N = (0 &minus; 9) mod 16 = 7.",
 c:"MOD-N needs &lceil;log&#8322;N&rceil; flip-flops. <b>Ripple</b>: each stage clocked by the previous, delays accumulate (n&times;t<sub>pd</sub>), transient wrong states. <b>Synchronous</b>: one shared clock, delay is a single t<sub>pd</sub> regardless of width. J=K=1 makes a JK toggle, which is what a ripple stage needs.",
 w:"Option 8 counts <i>states visited</i> rather than <i>transitions</i>. Pulses are the gaps &mdash; always one fewer. Draw arrows and count arrows."});

P({n:67,s:"Digital Logic & Design",q:"A = (11111010)&#8322; and B = (00001010)&#8322; in 2's complement, 1 byte. The product is",
 o:["(1001 1100)&#8322;","(1010 0101)&#8322;","(1100 0100)&#8322;","(1101 0101)&#8322;"],a:2,
 e:"A: MSB 1 &rarr; negative; invert+1 gives 00000110 = 6, so A = &minus;6. B = +10. Product &minus;60. Encode: 60 = 00111100, invert+1 &rarr; <b>11000100</b>.",
 c:"<b>Always decode &rarr; compute in decimal &rarr; re-encode.</b> Negation is invert-all-bits then add 1, and it is its own inverse. Faster check: treat the MSB as weight &minus;2<sup>n&minus;1</sup> &mdash; for 11111010, &minus;128+64+32+16+8+2 = &minus;6 &check;. Range for n bits: &minus;2<sup>n&minus;1</sup> to 2<sup>n&minus;1</sup>&minus;1.",
 w:"The common error is multiplying the patterns as unsigned (250&times;10). Also check the sign of your answer before choosing."});

P({n:68,s:"Digital Logic & Design",q:"How many 3-to-8 line decoders are required for a 1-of-32 decoder?",o:["1","2","4","8"],a:2,
 e:"32 outputs needed &divide; 8 outputs each = 4. Low 3 address bits go to all four in parallel; the high 2 bits drive the enables.",
 c:"<b>Count = 2<sup>n</sup>/2<sup>m</sup> = 2<sup>n&minus;m</sup>.</b> The same arithmetic covers memory expansion (16K&times;8 from 4K&times;8 needs 4 chips) and MUX trees. <b>The enable pin is what makes cascading possible</b> &mdash; without it decoders cannot be combined at all.",
 w:"Option 8 is outputs-per-decoder and option 2 is the extra address bits &mdash; both quantities you touch while solving. Anchor on the division."});

P({n:69,s:"Digital Logic & Design",q:"If (0.11101)&#8322; = (0.90xy5)&#8321;&#8320;, what are x and y?",
 o:["x=2, y=6","x=6, y=2","x=9, y=8","None of the above"],a:1,
 e:"0.5 + 0.25 + 0.125 + 0 + 0.03125 = <b>0.90625</b>. Aligning with 0.90xy5 gives x = 6, y = 2.",
 c:"Memorise the weights: 0.5, 0.25, 0.125, 0.0625, 0.03125, 0.015625. Reverse direction: repeatedly &times;2 and read integer parts &mdash; 0.90625 gives 1,1,1,0,1 &check;. <b>A decimal fraction terminates in binary iff its denominator in lowest terms is a power of 2</b> &mdash; 0.90625 = 29/32 terminates; 0.1 does not.",
 w:"Option A is x and y swapped. Write the template above your computed number and align column by column."});

P({n:70,s:"Databases",q:"R = (A,B,C,D,E,P,G) with AB&rarr;CD, DE&rarr;P, C&rarr;E, P&rarr;C, B&rarr;G. Which is true?",
 o:["R is in BCNF","R is in 3NF but not BCNF","R is in 2NF but not 3NF","R is not in 2NF"],a:3,
 e:"A and B never appear on any RHS so both are in every key; AB<sup>+</sup> = all of R, so <b>AB is the candidate key</b>. Then <b>B &rarr; G</b> has B as a proper subset of the key determining non-prime G &mdash; a partial dependency, so 2NF fails.",
 c:"<b>Work bottom-up and stop at the first failure.</b> Find keys (start with attributes never on the RHS), mark prime vs non-prime, then test. <b>Fastest disqualifier:</b> an FD whose left side is a strict part of a composite key determining a non-prime attribute. If every candidate key is a single attribute, 2NF holds automatically.",
 w:"C&rarr;E and P&rarr;C are transitive dependencies that break 3NF, and DE&rarr;P looks like a BCNF violation &mdash; tempting you to answer B or C. But 2NF fails first via the inconspicuous B&rarr;G at the end of the list."});

P({n:71,s:"Databases",q:"A and B are entities with simple single-valued attributes. R1 is one-to-many from A to B; R2 is many-to-many. Minimum number of tables?",
 o:["4","2","6","3"],a:3,
 e:"A &rarr; 1, B &rarr; 1, R1 absorbed as an FK in B &rarr; 0, R2 needs a junction table &rarr; 1. Total 3.",
 c:"<b>Tables = entities + many-to-many relationships + multivalued attributes + n-ary relationships.</b> 1:N and 1:1 are always absorbed. M:N cannot be, because neither side holds a single value &mdash; a third table is forced. The phrase &ldquo;simple single-valued attributes&rdquo; exists to rule out the multivalued case."});

P({n:72,s:"Databases",q:"<pre>CREATE INDEX myindex ON users(country, city, street)</pre>For which query is this index <b>least</b> useful?",
 o:["WHERE country='IN'","WHERE street='MG Road'","WHERE country='IN' AND city='Pune' AND street='MG Road'","WHERE country='IN' AND city='Pune'"],a:1,
 e:"Filtering on street alone skips the two leading columns, so the index offers no way to narrow &mdash; a full scan of 50 million rows. Like looking up &ldquo;MG Road&rdquo; in a directory sorted by country, then city, then street.",
 c:"<b>Leftmost prefix rule:</b> an index on (c1,&hellip;,cn) serves a query only if it constrains c1, or c1+c2, and so on &mdash; starting from the left with <b>no gaps</b>. Filtering on (c1,c3) uses it for c1 only. A <b>range</b> condition stops further index use. WHERE-clause order is irrelevant; the optimiser reorders.",
 w:"Option A filters on just one column so it looks weakest &mdash; but it's the <i>leftmost</i>, so the index works perfectly. Usefulness is about prefix position, not column count."});

P({n:73,s:"Databases",q:"Which is a characteristic of NoSQL databases?",
 o:["They enforce a strict schema","They support only relational data model","They are queried using SQL","They support flexible schema"],a:3,
 e:"Schema flexibility &mdash; differing record structures in one collection, fields added without migration &mdash; is the defining property. The other three describe relational databases.",
 c:"Four families: <b>key&ndash;value</b> (Redis), <b>document</b> (MongoDB), <b>column-family</b> (Cassandra), <b>graph</b> (Neo4j). <b>CAP:</b> at most two of Consistency, Availability, Partition tolerance; since partitions are unavoidable, real systems pick CP or AP. <b>ACID vs BASE</b> is the philosophy contrast &mdash; correctness first vs availability first with eventual consistency."});

P({n:74,s:"Computer Networks",q:"A = 10.0.0.126, B = 10.0.0.131, mask 255.255.255.192 on both. Which is true?",
 o:["10.0.0.x must be allocated by IANA and cannot be used by hosts","That mask cannot be assigned to class A addresses","A router will be required to communicate between A and B","A and B form part of a multicast group"],a:2,
 e:"Mask /26 &rArr; block size 256&minus;192 = 64, so subnets are 0&ndash;63, 64&ndash;127, 128&ndash;191, 192&ndash;255. A (.126) is in 64&ndash;127; B (.131) is in 128&ndash;191. Different subnets &rarr; router needed.",
 c:"<b>Block size = 256 &minus; interesting octet.</b> Same subnet iff (IP AND mask) matches: 126&amp;192 = 64 vs 131&amp;192 = 128. Usable hosts = 2<sup>h</sup> &minus; 2. /26 &rarr; 62 hosts, /27 &rarr; 30, /28 &rarr; 14, /30 &rarr; 2. Private ranges: 10/8, 172.16/12, 192.168/16. Multicast is 224&ndash;239.",
 w:"126 and 131 differ by five and feel like neighbours &mdash; the /26 boundary at 128 sits right between them. Never judge by numeric proximity; compute the boundaries."});

P({n:75,s:"Computer Networks",q:"Valid codewords A=00000, B=01110, C=11000. Receiver gets 01000. The system will",
 o:["Correct to codeword A","Correct to codeword B","Correct to codeword C","Be unable to correct the error"],a:3,
 e:"Distances: to A = 1, to B = 2, to C = 1. A <b>tie</b> between A and C &mdash; no unique nearest codeword, so it cannot correct. Confirmed by the code's parameters: d<sub>min</sub> = 2, so t = &lfloor;(2&minus;1)/2&rfloor; = <b>0</b> correctable errors.",
 c:"<b>Detectable = d<sub>min</sub> &minus; 1. Correctable t = &lfloor;(d<sub>min</sub>&minus;1)/2&rfloor;.</b> Geometric picture: codewords are sphere centres of radius t; correction works only if spheres don't overlap, needing d<sub>min</sub> &ge; 2t+1. Parity gives d<sub>min</sub>=2 (detect 1, correct 0); Hamming(7,4) gives 3 (correct 1).",
 w:"Having found distance 1 to A it is natural to stop. <b>Compute distance to every codeword before deciding</b> &mdash; the answer hinges on a tie only visible once you check C."});

P({n:76,s:"Computer Networks",q:"Two offices need confidentiality and integrity, and internal private IP addresses must also be confidential. Which IPSec configuration?",
 o:["AH in Tunnel mode","ESP in Transport mode","ESP in Tunnel mode","AH in Transport mode"],a:2,
 e:"Confidentiality requires encryption &rarr; <b>ESP</b> (AH provides none). Hiding internal IP headers requires <b>Tunnel</b> mode, which encapsulates the whole original packet inside a new header. This is also the standard site-to-site VPN setup.",
 c:"<b>Two independent choices, one requirement settles each.</b> AH: integrity + authentication, <b>no encryption</b>, breaks through NAT, protocol 51. ESP: adds confidentiality, NAT-traversable, protocol 50. Transport protects payload only; Tunnel protects the entire packet. IKE (UDP 500) negotiates the SAs.",
 w:"AH is often loosely called &ldquo;more secure&rdquo; because it also covers the outer header &mdash; but that is integrity, not secrecy. <b>The moment a question says confidentiality or &ldquo;hidden&rdquo;, AH is out.</b>"});

P({n:77,s:"Theory of Computation",q:"S &rarr; A | B, &nbsp; A &rarr; aAb | c, &nbsp; B &rarr; bBd | e. Which string matches G?",
 o:["accbb","aacbb","abaed","aaebb"],a:1,
 e:"A generates a<sup>n</sup>cb<sup>n</sup>; B generates b<sup>n</sup>ed<sup>n</sup>. <span class='mono'>aacbb</span> = a&sup2;cb&sup2; &check;. <span class='mono'>accbb</span> has two c's (the base case fires once). <span class='mono'>abaed</span> mixes both branches. <span class='mono'>aaebb</span> uses B's base symbol e inside A's a&hellip;b wrapper.",
 c:"<b>X &rarr; &alpha;X&beta; | &gamma; always gives &alpha;<sup>n</sup>&gamma;&beta;<sup>n</sup></b> &mdash; matched nesting around a single base symbol. Three fast eliminations: base symbol appears exactly once; counts must balance; <b>branch alphabets are disjoint</b> since S &rarr; A | B picks one branch for the whole derivation. Or work backwards: strip matching outer symbols until you hit a base case.",
 w:"Option D balances the a/b counts and uses a valid base symbol &mdash; but the wrong one for that wrapper. Always confirm the base symbol and surrounding pair belong to the <b>same rule</b>."});

P({n:78,s:"Compiler Design",q:"For the same input string, which is true of an ambiguous grammar? (i) two parse trees (ii) two leftmost derivations (iii) two rightmost derivations (iv) leftmost and rightmost derivations are different",
 o:["(i),(ii),(iii) true; (iv) false","(i) true; others false","&mdash;","&mdash;"],a:0,
 e:"Two parse trees &hArr; two leftmost derivations &hArr; two rightmost derivations &mdash; all equivalent. (iv) is false because leftmost and rightmost always differ as step sequences, ambiguous or not; that says nothing about ambiguity.",
 c:"Remove ambiguity by <b>layering the grammar</b> to encode precedence: E&rarr;E+T|T, T&rarr;T*F|F, F&rarr;(E)|id. Left recursion gives left associativity. Ambiguity is a property of the <b>grammar</b>, not the language; some languages are inherently ambiguous; deciding ambiguity for an arbitrary CFG is <b>undecidable</b>. Parser generators surface it as shift/reduce conflicts.",
 w:"Statement (iv) compares leftmost against rightmost; ambiguity needs two of the <b>same kind</b>. Check that any statement about derivations compares like with like."});

P({n:79,s:"AI, Data Science & Cloud",q:"Match: (i) Structured (ii) Semi-structured (iii) Unstructured &mdash; with (P) Text files/Images/Videos, (Q) Fixed format data, (R) XML/JSON.",
 o:["(i)Q (ii)R (iii)P","(i)Q (ii)P (iii)R","(i)P (ii)R (iii)Q","(i)R (ii)Q (iii)P"],a:0,
 e:"Structured = predefined schema = fixed format (Q). Semi-structured = self-describing tags without a rigid schema = XML/JSON (R). Unstructured = no organisational model = text, images, video (P).",
 c:"<b>The test is whether a schema is enforced before writing.</b> JSON carries field names but nothing stops two documents differing &mdash; self-describing, not schema-enforced. Roughly 80% of enterprise data is unstructured, which is why Big Data tooling exists. <b>Data warehouse</b> = schema-on-write; <b>data lake</b> = schema-on-read."});

P({n:80,s:"AI, Data Science & Cloud",q:"Which is used for storing unstructured data in a Big Data environment?",
 o:["In-memory database","Relational database","NOSQL database","SQL database"],a:2,
 e:"NoSQL imposes no fixed schema. Note that options B and D name the <i>same</i> technology, so neither can be the unique answer &mdash; that observation alone halves the field.",
 c:"<b>Look for synonymous options in every multiple-choice paper.</b> Two options meaning the same thing can never both be correct, so both are discardable instantly."});

P({n:81,s:"AI, Data Science & Cloud",q:"Which Big Data tool is used for real-time stream processing?",
 o:["Hadoop","Apache Flink","Splunk","ERDPlus"],a:1,
 e:"Flink is stream-first, processing each event as it arrives. Hadoop MapReduce is batch; Splunk is log search; ERDPlus draws ER diagrams.",
 c:"<b>Micro-batching vs true streaming:</b> Spark Streaming uses small time slices (~1s latency); Flink and Storm process per-event (millisecond latency). Ecosystem: Kafka transports the stream, Flume/Sqoop ingest, Zookeeper coordinates, Oozie/Airflow schedule."});

P({n:82,s:"AI, Data Science & Cloud",q:"What does &ldquo;elasticity&rdquo; in cloud computing refer to?",
 o:["Ability to scale up and scale down compute resources","Parallel execution of jobs","High availability of systems","Minimum response time"],a:0,
 e:"Automatic, bidirectional adjustment of capacity to track demand, so you pay only for what is used.",
 c:"<b>Scalability vs elasticity:</b> scalability is the capability to handle growth, often manual and one-directional; elasticity is automatic and includes scaling <b>down</b>. The &ldquo;down&rdquo; is what makes it elastic. NIST's five characteristics: on-demand self-service, broad network access, resource pooling, rapid elasticity, measured service. IaaS/PaaS/SaaS by how much you manage."});

P({n:83,s:"AI, Data Science & Cloud",q:"Which algorithm is used for search/optimization in AI?",
 o:["Greedy Algorithm","Recursive Algorithm","Hill Climbing Algorithm","Hot Potato Algorithm"],a:2,
 e:"Hill climbing is a classical local search: move to the best-valued neighbour until none improves. Greedy and recursive are general <i>paradigms</i>, not AI search algorithms; hot potato is packet routing.",
 c:"<b>Uninformed:</b> BFS, DFS, uniform cost, iterative deepening. <b>Informed:</b> greedy best-first (h alone, not optimal), <b>A*</b> (f = g + h, optimal if h is admissible). <b>Local:</b> hill climbing (stuck at local maxima, plateaux, ridges), simulated annealing, genetic algorithms. Fix for local maxima is <b>random restart</b>. Adversarial: minimax with alpha&ndash;beta pruning (b &rarr; &radic;b)."});

P({n:84,s:"AI, Data Science & Cloud",q:"Which algorithm is used for Reinforcement Learning?",
 o:["Naive Bayes","Principal Component Analysis","Fast Forest Quantile","Q-learning"],a:3,
 e:"Q-learning is the canonical model-free RL algorithm. Naive Bayes is supervised; PCA is unsupervised dimensionality reduction; Fast Forest Quantile is supervised regression.",
 c:"Q(s,a) &larr; Q(s,a) + &alpha;[r + &gamma;&middot;max<sub>a&prime;</sub>Q(s&prime;,a&prime;) &minus; Q(s,a)]. It is <b>off-policy</b> &mdash; learns the optimal policy regardless of the exploration policy (usually &epsilon;-greedy). <b>SARSA</b> is the on-policy twin, using the action actually taken instead of the max. The whole setting is a Markov Decision Process."});

P({n:85,s:"Computer Networks",q:"Which can be protected using a firewall?",
 o:["Dumpster Diving","Physical Theft","Shoulder Surfing","Network Scanning"],a:3,
 e:"A firewall filters network traffic, so it can block or rate-limit scanning probes. The other three are physical or social attacks that never cross the network.",
 c:"<b>Ask whether the attack crosses the network.</b> If not, a network control is irrelevant. Firewall types: packet filter (stateless), stateful inspection, application proxy, next-gen (DPI + IPS). Firewalls do <b>not</b> stop attacks over permitted ports (most web attacks ride 443), insiders, removable media, or anything physical."});

P({n:86,s:"Computer Networks",q:"If an encryption key is n bits long, how many distinct keys are possible?",
 o:["2<sup>n</sup>","2<sup>n</sup> &minus; 1","n(n+1)/2","2n"],a:0,
 e:"Each of n positions is independently 0 or 1. All 2<sup>n</sup> patterns are valid &mdash; the all-zero key is as legitimate as any other.",
 c:"Brute force needs 2<sup>n&minus;1</sup> tries on average; <b>every extra bit doubles the work</b>. This counting applies to <b>symmetric</b> keys only &mdash; RSA keys aren't arbitrary strings, so RSA-2048 &asymp; 112-bit symmetric and ECC-256 &asymp; 128-bit. Grover's algorithm halves effective symmetric key length, hence AES-256.",
 w:"Compare with Q90 &mdash; this paper asks both &ldquo;how large is the key space&rdquo; and &ldquo;how many keys must be distributed&rdquo;. They are entirely different quantities."});

P({n:87,s:"Computer Networks",q:"Which protocol does <b>not</b> facilitate data encryption?",
 o:["HTTPS","SNMPv3","DNS using DNSSEC","SFTP"],a:2,
 e:"DNSSEC adds <b>signatures</b> for origin authentication and integrity. Queries and answers still travel in <b>plaintext</b>. SNMPv3 is specifically the version that added privacy; SFTP runs inside SSH.",
 c:"<b>Integrity-only mechanisms that do not encrypt:</b> DNSSEC, IPSec AH, digital signatures, MAC/HMAC, plain hashes. For DNS confidentiality you need <b>DoT</b> (port 853) or <b>DoH</b> (443) &mdash; orthogonal to DNSSEC and often deployed together.",
 w:"&ldquo;SEC&rdquo; implies encryption but means <i>security extensions</i> in the authenticity sense. Same conceptual error as believing IPSec AH encrypts (see Q76). Whenever a name contains &ldquo;sec&rdquo;, check what it actually provides."});

P({n:88,s:"Computer Networks",q:"In which case is a user persuaded to reveal personal data?",
 o:["Eavesdropping attack","SQL Injection attack","Phishing","Website Defacement"],a:2,
 e:"The operative word is <b>persuaded</b>. Phishing deceives the victim into handing over data voluntarily; the others involve no persuasion of the victim at all.",
 c:"Family: <b>spear phishing</b> (targeted), <b>whaling</b> (executives), <b>vishing</b> (voice), <b>smishing</b> (SMS), <b>pharming</b> (DNS poisoning, no lure), <b>baiting</b> (infected USB), <b>pretexting</b> (fabricated scenario). Social engineering bypasses every technical control &mdash; mitigations are training plus MFA.",
 w:"Classify any attack on two axes: passive vs active, and whether it targets a human, application, host or network. That sorts nearly every option list."});

P({n:89,s:"Computer Networks",q:"Which of the following does <b>not</b> use key(s)?",
 o:["Symmetric Ciphers","Generation of Message Digest","Generation of Message Authentication Code","Key exchange algorithms"],a:1,
 e:"A message digest is a plain hash h = H(M) &mdash; message only, <b>no key</b>. A MAC is a <i>keyed</i> hash H(K,M); the key is exactly what separates the two.",
 c:"<b>Hash:</b> no key, integrity only, <i>no authentication</i> (an attacker who edits the message just recomputes the hash). <b>MAC:</b> shared key, integrity + authentication, <b>no non-repudiation</b> (both parties hold the key). <b>Signature:</b> private key, adds non-repudiation. Hash properties: preimage, second preimage, collision resistance &mdash; collisions need only 2<sup>n/2</sup> work by the birthday bound. MD5 and SHA-1 are broken."});

P({n:90,s:"Computer Networks",q:"How many keys are needed for encrypted communication among 16 persons using AES, with a unique key between any two?",
 o:["120 keys","256 keys","32 keys","2<sup>16</sup> keys"],a:0,
 e:"AES is symmetric, so one key per <i>pair</i>: C(16,2) = 16&times;15/2 = 120. The key is shared, not directional, which is why we divide by 2.",
 c:"<b>Symmetric: n(n&minus;1)/2 keys, O(n&sup2;).</b> Asymmetric: 2n keys, linear &mdash; option C (32) is exactly 2n, placed there for anyone forgetting AES is symmetric. Real systems use <b>hybrid</b> crypto: asymmetric establishes a session key, AES does the bulk. Or a KDC (Kerberos) reduces storage to one key per user.",
 w:"Option 256 = 16&sup2;, counting ordered pairs including self-pairs."});

P({n:91,s:"Algorithms",q:"Which sorting technique gives {2, 5, 10, 16, 8, 9} after three iterations on input {10, 5, 16, 2, 8, 9}?",
 o:["Bubble sort","Selection sort","Insertion sort","All of the above"],a:2,
 e:"Insertion: pass 1 inserts 5 &rarr; 5,10,16,2,8,9; pass 2 inserts 16 (no move); pass 3 inserts 2 &rarr; <b>2,5,10,16,8,9</b> &check;. Selection would put the three globally smallest first (2,5,8&hellip;); bubble would push the three largest to the end.",
 c:"<b>Signature after k passes:</b> insertion &rarr; first k+1 elements sorted <i>among themselves</i>, tail untouched; selection &rarr; first k are the globally smallest; bubble &rarr; last k are the globally largest; merge &rarr; sorted runs of length 2<sup>k</sup>; quick &rarr; pivots in final position. <b>The decisive question: are the leading elements globally smallest, or merely sorted relative to each other?</b> Here 8 and 9 are smaller than 10 and 16 but still behind them &mdash; that rules out selection."});

P({n:92,s:"Algorithms",q:"Which is true about a Greedy algorithm?",
 o:["Does not make any optimization","Makes local optimal decisions based on the selected criterion","Requires exhaustive search of all possible solutions","Is obvious in its correctness"],a:1,
 e:"Greedy builds incrementally, taking the locally best choice and never reconsidering. Option C describes brute force &mdash; avoiding it is the whole point.",
 c:"Provably optimal when the problem has the <b>greedy choice property</b> and <b>optimal substructure</b>. Works: Kruskal, Prim, Dijkstra, Huffman, fractional knapsack, activity selection. Fails: <b>0/1 knapsack</b>, negative-weight shortest paths, matrix chain, LCS, TSP, coin change with arbitrary denominations ({1,3,4} making 6 greedily gives 4+1+1, not 3+3).",
 w:"Option D is the subtle one. Greedy algorithms are obvious in <i>operation</i> but frequently non-obvious in <b>correctness</b> &mdash; proving the greedy choice property usually needs an exchange argument."});

P({n:93,s:"Algorithms",q:"Match: (P) travel from one place to another in shortest time, (Q) visit M places in shortest time, (R) all N persons visit all M places in shortest time &mdash; with (i) Floyd, (ii) Multi-stage graph, (iii) Dijkstra.",
 o:["P&ndash;(ii), Q&ndash;(iii), R&ndash;(i)","P&ndash;(i), Q&ndash;(iii), R&ndash;(ii)","P&ndash;(ii), Q&ndash;(i), R&ndash;(iii)","P&ndash;(i), Q&ndash;(ii), R&ndash;(iii)"],a:0,
 e:"<b>R &rarr; Floyd is unambiguous</b> &mdash; every source to every destination is all-pairs shortest path. That pins the answer to A or B, and B assigns R to multi-stage graph, so A is forced. The P and Q assignments are genuinely debatable on the English, but they don't need resolving.",
 c:"<b>Selection rule:</b> one source + non-negative weights &rarr; Dijkstra. One source + negative weights &rarr; Bellman&ndash;Ford. <b>Every source &rarr; Floyd&ndash;Warshall</b> O(V&sup3;). Ordered stages &rarr; multi-stage DP. Floyd recurrence: d<sub>ij</sub><sup>(k)</sup> = min(d<sub>ij</sub><sup>(k&minus;1)</sup>, d<sub>ik</sub><sup>(k&minus;1)</sup> + d<sub>kj</sub><sup>(k&minus;1)</sup>), with <b>k outermost</b> &mdash; swapping loop order silently breaks it.",
 w:"<b>In matching questions find the one pairing you are certain about and eliminate with it.</b> Never try to resolve all three when one decides the answer."});

P({n:94,s:"Operating System",f:1,q:"Analyse the given resource allocation graph. Which is the corresponding wait-for graph?",
 o:["figure A","figure B","figure C","figure D"],a:0,
 e:"Both graphs are images.",
 c:"<b>Collapse every two-edge path P<sub>i</sub> &rarr; R<sub>j</sub> &rarr; P<sub>k</sub> into the single edge P<sub>i</sub> &rarr; P<sub>k</sub></b>, discarding resource nodes. List request edges, find who holds each resource, write the process-to-process edge. Then count edges &mdash; options usually differ by one edge or a reversed direction.",
 w:"<b>A cycle means deadlock only when each resource type has one instance.</b> With multiple instances a cycle is necessary but not sufficient, and you must run the detection matrix instead. The wait-for graph is only a valid test in the single-instance case."});

P({n:95,s:"Digital Logic & Design",f:1,q:"To get a LOW output from the given logic circuit, the possible inputs are",
 o:["A=1, B=1, C=0","A=1, B=1, C=1","A=0, B=0, C=1","A=0, B=0, C=0"],a:2,
 e:"The circuit is a diagram.",
 c:"<b>Back-propagate from the output</b> rather than testing all four rows forward. Ask what the final gate needs to output LOW, then what its inputs must be. Look for a <b>dominating input</b>: one 0 into an AND forces 0; one 1 into a NOR forces 0 &mdash; everything else becomes irrelevant. With only four candidate rows, brute-force substitution is also entirely viable and is immune to misreading gate symbols."});

})();
