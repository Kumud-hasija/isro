/* Four-year trend analysis — replaces the three-year version in d7.js */
window.ISRO.trendsHTML = [
'<div class="card">',
'<h2>Four papers measured: 2018, 2020, 2023, 2025</h2>',
'<p>All four captured in full from the official review. 2018: 80 questions / 240 marks. 2020: 77 / 231. 2023: 93 / 254. 2025: 95 / 260. Subject questions carry 3 marks throughout.</p>',
'<table><thead><tr><th>Subject</th><th class="n">2018</th><th class="n">2020</th><th class="n">2023</th><th class="n">2025</th><th>Shape</th><th class="n">2026</th></tr></thead><tbody>',
'<tr><td><b>Computer Networks</b></td><td class="n">7</td><td class="n">5</td><td class="n">10</td><td class="n">15</td><td class="up">dip, then strong growth</td><td class="n"><b>14&ndash;17</b></td></tr>',
'<tr><td><b>AI, Data Science &amp; Cloud</b></td><td class="n">1</td><td class="n">0</td><td class="n">5</td><td class="n">11</td><td class="up">token &rarr; real, accelerating</td><td class="n"><b>11&ndash;14</b></td></tr>',
'<tr><td><b>Computer Org. &amp; Architecture</b></td><td class="n">6</td><td class="n">12</td><td class="n">5</td><td class="n">0</td><td class="down">spiked, then collapsed</td><td class="n"><b>0&ndash;3</b></td></tr>',
'<tr><td><b>Programming &amp; C</b></td><td class="n">10</td><td class="n">5</td><td class="n">1</td><td class="n">1</td><td class="down">10&rarr;5&rarr;1&rarr;1 monotonic</td><td class="n"><b>1</b></td></tr>',
'<tr><td>General Aptitude</td><td class="n">0</td><td class="n">1</td><td class="n">15</td><td class="n">14</td><td>introduced c.2021&ndash;23</td><td class="n">14&ndash;15</td></tr>',
'<tr><td><b>Operating System</b></td><td class="n">11</td><td class="n">10</td><td class="n">9</td><td class="n">9</td><td>11&rarr;10&rarr;9&rarr;9 gentle, stable</td><td class="n"><b>9</b></td></tr>',
'<tr><td><b>Digital Logic &amp; Design</b></td><td class="n">5</td><td class="n">7</td><td class="n">7</td><td class="n">7</td><td>flat at 7 since 2020</td><td class="n"><b>7</b></td></tr>',
'<tr><td>Databases</td><td class="n">9</td><td class="n">4</td><td class="n">7</td><td class="n">7</td><td>volatile, now flat</td><td class="n">7</td></tr>',
'<tr><td>Data Structures</td><td class="n">5</td><td class="n">7</td><td class="n">4</td><td class="n">1</td><td class="down">declining</td><td class="n">1&ndash;3</td></tr>',
'<tr><td>Compiler Design</td><td class="n">5</td><td class="n">7</td><td class="n">3</td><td class="n">3</td><td>fell, now flat</td><td class="n">3</td></tr>',
'<tr><td>Algorithms</td><td class="n">5</td><td class="n">7</td><td class="n">5</td><td class="n">4</td><td>mild decline</td><td class="n">4&ndash;5</td></tr>',
'<tr><td>Software Engineering</td><td class="n">5</td><td class="n">5</td><td class="n">4</td><td class="n">7</td><td>noisy around 5</td><td class="n">5&ndash;7</td></tr>',
'<tr><td>Theory of Computation</td><td class="n">4</td><td class="n">5</td><td class="n">7</td><td class="n">5</td><td>noisy around 5</td><td class="n">5&ndash;6</td></tr>',
'<tr><td>Discrete Mathematics</td><td class="n">3</td><td class="n">1</td><td class="n">6</td><td class="n">6</td><td>rose, now flat</td><td class="n">6</td></tr>',
'<tr><td>Engineering Mathematics</td><td class="n">2</td><td class="n">1</td><td class="n">3</td><td class="n">4</td><td class="up">slow rise</td><td class="n">4</td></tr>',
'<tr><td>OOP &amp; Java</td><td class="n">1</td><td class="n">0</td><td class="n">1</td><td class="n">1</td><td>token</td><td class="n">1</td></tr>',
'<tr class="tot"><td>Total</td><td class="n">80</td><td class="n">77</td><td class="n">93</td><td class="n">95</td><td>&mdash;</td><td class="n">~95</td></tr>',
'</tbody></table>',
'</div>',

'<div class="card" style="border-left:4px solid var(--warn)">',
'<h2>A correction to the earlier forecast</h2>',
'<p>With three papers I reported that Computer Networks was growing <b>&ldquo;+5, +5 &mdash; perfectly linear&rdquo;</b> (5 &rarr; 10 &rarr; 15) and called it &ldquo;as clean as trend data gets&rdquo;.</p>',
'<p><b>Adding 2018 shows that was an artefact of which three years I happened to have.</b> The real series is <b>7 &rarr; 5 &rarr; 10 &rarr; 15</b> &mdash; it <i>fell</i> between 2018 and 2020 before rising. The apparent mechanical regularity was coincidence.</p>',
'<p>What survives: Networks has roughly doubled since 2018 and is clearly the growth subject. What does not survive: the implication that 2026 will be 20. <b>A plateau at 14&ndash;17 is now at least as likely as continued growth</b>, which is why that row is forecast as a range rather than a trajectory.</p>',
'<p>The same caution applies to <b>COA</b>: I described 12 &rarr; 5 &rarr; 0 as a &ldquo;monotonic collapse&rdquo;. With 2018 at 6, the series is 6 &rarr; 12 &rarr; 5 &rarr; 0 &mdash; 2020 was a <i>spike</i>, not a peak. The recent direction is still firmly down, so the practical advice is unchanged, but the forecast widens to 0&ndash;3.</p>',
'</div>',

'<div class="card">',
'<h2>What four points show that three could not</h2>',

'<h3>1. Programming &amp; C is the cleanest decline in the dataset</h3>',
'<div class="bars">',
'<div class="brow"><span>2018</span><div class="btrack"><div class="bfill b2" style="width:100%"></div></div><span class="bnum">10 Q</span></div>',
'<div class="brow"><span>2020</span><div class="btrack"><div class="bfill b2" style="width:50%"></div></div><span class="bnum">5 Q</span></div>',
'<div class="brow"><span>2023</span><div class="btrack"><div class="bfill b2" style="width:10%"></div></div><span class="bnum">1 Q</span></div>',
'<div class="brow"><span>2025</span><div class="btrack"><div class="bfill b2" style="width:10%"></div></div><span class="bnum">1 Q</span></div>',
'</div>',
'<p>10 &rarr; 5 &rarr; 1 &rarr; 1, monotonic with no reversal. In 2018 it was the second-largest subject. C programming puzzles &mdash; pointer arithmetic, recursion tracing, endianness &mdash; have essentially been removed. <b>One question is not worth preparing for separately.</b></p>',

'<h3>2. Operating Systems is the most reliable subject in the paper</h3>',
'<p><b>11, 10, 9, 9.</b> A gentle settle to a stable 9, present in every paper, and the largest consistently-weighted technical subject. Together with Digital Logic (5, 7, 7, 7) and Databases (9, 4, 7, 7 &mdash; now flat) that is <b>23 questions and 69 marks</b> of entirely predictable return.</p>',
'<p>If you have limited time, these three are where preparation converts most reliably into marks.</p>',

'<h3>3. The exam was restructured between 2020 and 2023</h3>',
'<p>General Aptitude went <b>0 &rarr; 1 &rarr; 15 &rarr; 14</b>. It effectively did not exist before 2023 and has been stable since. AI/Data Science/Cloud went <b>1 &rarr; 0 &rarr; 5 &rarr; 11</b> &mdash; and the single 2018 question was about <i>search engine cloaking</i>, not machine learning, showing it was a catch-all category before becoming a genuine AI section.</p>',
'<p><b>Consequence: 2018 and 2020 are useful for subject drill, useless for predicting structure.</b> Weight your mock-paper expectations on 2023 and 2025 only.</p>',

'<h3>4. Cryptography and security appear in all four papers</h3>',
'<p>2018: DMZ, asymmetric algorithms. 2020: avalanche effect, columnar transposition. 2023: ARP spoofing, asymmetric limits, ingress/egress, CAPTCHA. 2025: RSA, X.509, CIA services, IPSec, Hamming, firewalls, key spaces, DNSSEC, phishing, hash vs MAC, key distribution.</p>',
'<p>The volume has grown with the Networks section, and <b>in 2025 nine of the fifteen Networks questions were security questions.</b> A standard computer-networks syllabus does not cover this material.</p>',
'</div>',

'<div class="card">',
'<h2>Where the marks are for 2026</h2>',
'<table><thead><tr><th>Priority</th><th>Subjects</th><th class="n">Forecast marks</th><th>Basis</th></tr></thead><tbody>',
'<tr><td><b>1</b></td><td>Computer Networks + security/crypto</td><td class="n">~42&ndash;51</td><td>Largest subject; growth real though not linear; half is security</td></tr>',
'<tr><td><b>2</b></td><td>AI, Data Science &amp; Cloud</td><td class="n">~33&ndash;42</td><td>Accelerating; pure recall; outside GATE so widely unprepared</td></tr>',
'<tr><td><b>3</b></td><td>OS + Digital Logic + Databases</td><td class="n">~69</td><td>Most stable block across all four papers</td></tr>',
'<tr><td><b>4</b></td><td>General Aptitude</td><td class="n">~18</td><td>Stable since introduction; technique not content</td></tr>',
'<tr><td><b>5</b></td><td>Discrete Maths, TOC, Soft. Eng., Algorithms, Eng. Maths</td><td class="n">~72</td><td>Mid-weight, all roughly stable</td></tr>',
'<tr><td><b>6</b></td><td>COA, Data Structures, Compiler, Programming &amp; C, OOP</td><td class="n">~18&ndash;24</td><td>All declining or token</td></tr>',
'</tbody></table>',
'<p>Priorities 1 and 2 together are roughly <b>75&ndash;93 marks of 260</b> &mdash; about a third of the paper &mdash; and both sit outside the standard GATE CS syllabus.</p>',
'</div>',

'<div class="card">',
'<h2>Recurring question shapes</h2>',
'<p>These templates appear across papers. Drill them as techniques.</p>',
'<table><thead><tr><th>Shape</th><th>2018</th><th>2020</th><th>2023</th><th>2025</th></tr></thead><tbody>',
'<tr><td><b>Cryptography / security</b></td><td>Q77, Q78</td><td>Q34, Q35</td><td>Q39, Q40, Q89, Q90</td><td>Q34, Q86, Q89, Q90</td></tr>',
'<tr><td><b>Normalisation / FD</b></td><td>Q54</td><td>Q29</td><td>Q22</td><td>Q70</td></tr>',
'<tr><td><b>Cohesion / coupling</b></td><td>Q59</td><td>Q9</td><td>&mdash;</td><td>Q55</td></tr>',
'<tr><td><b>Sorting properties / trace</b></td><td>Q66</td><td>Q46</td><td>&mdash;</td><td>Q91</td></tr>',
'<tr><td><b>Page replacement</b></td><td>Q17</td><td>Q49</td><td>&mdash;</td><td>Q57</td></tr>',
'<tr><td>Grammar &rarr; closed form</td><td>&mdash;</td><td>Q40</td><td>Q30, Q84</td><td>Q17, Q77</td></tr>',
'<tr><td>Minimal DFA count</td><td>&mdash;</td><td>Q38</td><td>Q29</td><td>Q18</td></tr>',
'<tr><td>Grammar ambiguity</td><td>&mdash;</td><td>Q19</td><td>Q5</td><td>Q78</td></tr>',
'<tr><td>CFL closure properties</td><td>Q21</td><td>Q42</td><td>&mdash;</td><td>&mdash;</td></tr>',
'<tr><td>Tree traversal</td><td>&mdash;</td><td>Q56, Q60</td><td>Q19, Q62</td><td>Q52</td></tr>',
'<tr><td>Error detection / correction</td><td>Q1</td><td>&mdash;</td><td>Q16, Q61</td><td>Q75</td></tr>',
'<tr><td>Four-item matching</td><td>&mdash;</td><td>&mdash;</td><td>Q11, Q39, Q79, Q89</td><td>Q43, Q48, Q79, Q93</td></tr>',
'<tr><td>Handshaking + Euler</td><td>Q38</td><td>&mdash;</td><td>Q74</td><td>Q50</td></tr>',
'<tr><td>Function Points</td><td>Q58</td><td>&mdash;</td><td>&mdash;</td><td>Q54</td></tr>',
'<tr><td>Deadlock resource counting</td><td>Q12</td><td>Q50</td><td>&mdash;</td><td>Q58</td></tr>',
'</tbody></table>',
'<p><b>One verbatim repeat confirmed:</b> 2023 Q30 and 2025 Q17 &mdash; identical grammar S &rarr; aSb | T, T &rarr; bT | b, identical options, identical answer. <b>One near-verbatim:</b> CFL closure, 2018 Q21 and 2020 Q42.</p>',
'</div>',

'<div class="card">',
'<h2>Using the three predicted sets</h2>',
'<p><b>Set A &mdash; full-weight mock.</b> 30 questions in forecast proportions. Timed diagnostic.</p>',
'<p><b>Set B &mdash; growth areas.</b> Networks, security and AI/DS/Cloud.</p>',
'<p><b>Set C &mdash; likely repeats.</b> Built on the templates above. Highest yield when short of time.</p>',
'<p style="font-size:14px;color:var(--fg-faint)"><b>What these are:</b> questions written in the style, difficulty and weighting of the real papers. Not leaked, not official. Their value is rehearsing recurring techniques, not matching specific questions.</p>',
'<p style="font-size:14px;color:var(--fg-faint)"><b>Forecast confidence.</b> Four points is enough to tell a trend from noise and &mdash; as the Networks correction above shows &mdash; enough to catch a false pattern that three points suggested. Trust the <b>flat</b> rows (OS, Digital Logic, Databases) most; the <b>monotonic</b> rows (Programming &amp; C) next; treat <b>volatile</b> rows (COA, Software Engineering, TOC) as ranges. 2017, 2016 and 2015 would tighten this further, though the pre-2023 restructuring limits how much older papers can say about current format.</p>',
'</div>'
].join("");

/* Order tabs: real papers newest-first, then predicted sets */
(function(){
  var order = ["y2025","y2023","y2020","y2018","p2026a","p2026b","p2026c"];
  window.ISRO.sets.sort(function(a,b){
    var i = order.indexOf(a.id), j = order.indexOf(b.id);
    return (i<0?99:i) - (j<0?99:j);
  });
})();
