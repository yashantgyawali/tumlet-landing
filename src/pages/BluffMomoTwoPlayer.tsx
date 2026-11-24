import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Lightbulb, CheckCircle2, XCircle, Flame, Shield, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';

// Unlisted page: reachable by URL only. Do not add it to the navbar, footer,
// sitemap.xml or scripts/generate-html.mjs, and do not link to it from other pages.

const ASSET = '/bluff-momo-manual';
const PAGE_URL = 'https://tumlet.com/bluff-momo-rules-2-player-variant/';
const TITLE = 'Bluff Momo 2-Player Variant | Rules Manual';
const DESC =
  'How to play Bluff Momo with two players: five cards each, a hand of two, a draw pile of three, named poison and the double आमा block.';

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name='${name}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setPropertyTag(property: string, content: string) {
  let tag = document.querySelector(`meta[property='${property}']`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.querySelector("link[rel='canonical']");
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

const CARD = 'bg-white rounded-xl border-2 border-tumlet-text/10 p-6 md:p-7';
const CARD_POP = `${CARD} shadow-[6px_6px_0px_0px_#F3B952]`;
const SECTION = 'px-6 md:px-12 lg:px-24 max-w-5xl mx-auto';
const H2 = 'font-baloo font-extrabold text-2xl md:text-3xl text-tumlet-text';
const H3 = 'font-baloo font-bold text-xl text-tumlet-text';
const LEAD = 'text-lg md:text-xl text-tumlet-text/70 max-w-[60ch] leading-relaxed';
const BODY = 'text-tumlet-text/80 leading-relaxed';

const CHAPTERS = [
  { id: 'overview', title: 'What is different' },
  { id: 'setup', title: 'Setting up' },
  { id: 'losing', title: 'Losing cards and your draw pile' },
  { id: 'turn', title: 'Your turn' },
  { id: 'poison', title: 'भट्टीको दाई: named poison' },
  { id: 'aama', title: 'आमा: the double claim' },
  { id: 'mantri', title: 'मन्त्री and the court' },
  { id: 'food-poison', title: 'Food-poison' },
  { id: 'challenges', title: 'Challenges' },
  { id: 'reference', title: 'Quick reference' },
];

function BluffMomoTwoPlayer() {
  useEffect(() => {
    document.title = TITLE;
    setMetaTag('description', DESC);
    setCanonical(PAGE_URL);
    setPropertyTag('og:title', TITLE);
    setPropertyTag('og:description', DESC);
    setPropertyTag('og:type', 'website');
    setPropertyTag('og:url', PAGE_URL);
    setPropertyTag('og:image', 'https://tumlet.com/unfurl.png');
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', TITLE);
    setMetaTag('twitter:image', 'https://tumlet.com/unfurl.png');
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-baloo text-tumlet-text bg-white">
      <Navbar />

      <main className="flex-1 pt-12 md:pt-16 pb-24">
        <Intro />
        <Contents />
        <Overview />
        <Setup />
        <Losing />
        <Turn />
        <Poison />
        <Aama />
        <Mantri />
        <FoodPoison />
        <Challenges />
        <Reference />
      </main>
    </div>
  );
}

/* ── Shared bits ─────────────────────────────────────────────────── */

function Chapter({ id, children }: { id: string; children: React.ReactNode }) {
  const n = CHAPTERS.findIndex((c) => c.id === id) + 1;
  const title = CHAPTERS[n - 1].title;
  return (
    <section id={id} className={`${SECTION} scroll-mt-24 mt-20 md:mt-24`}>
      <span className="inline-block font-outfit text-xs font-bold uppercase tracking-[0.16em] text-tumlet-primaryRed bg-tumlet-beige rounded-full px-3 py-1">
        Section {n}
      </span>
      <h2 className={`${H2} mt-3 mb-4`}>{title}</h2>
      {children}
    </section>
  );
}

function Callout({ tone, icon, children }: { tone: 'yellow' | 'red'; icon: React.ReactNode; children: React.ReactNode }) {
  const skin =
    tone === 'red'
      ? 'bg-[#FDECEA] border-tumlet-primaryRed/30 text-tumlet-primaryRed'
      : 'bg-tumlet-beige border-tumlet-primaryYellow/50 text-tumlet-brown';
  return (
    <div className={`flex gap-3 rounded-xl border-2 p-5 md:p-6 max-w-[70ch] ${skin}`}>
      <span className="flex-none mt-0.5">{icon}</span>
      <div className={BODY}>{children}</div>
    </div>
  );
}

function Steps({ steps }: { steps: { title: string; body: React.ReactNode }[] }) {
  return (
    <ol className="mt-8 space-y-7 list-none">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-5">
          <span className="flex-none w-10 h-10 rounded-full bg-tumlet-primaryRed text-white font-baloo font-extrabold text-lg flex items-center justify-center">
            {i + 1}
          </span>
          <div className="pt-1">
            <h3 className={H3}>{s.title}</h3>
            <div className={`${BODY} mt-1 max-w-[60ch]`}>{s.body}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CardBack({ className = '' }: { className?: string }) {
  return (
    <img
      src={`${ASSET}/images/card-back.png`}
      alt=""
      aria-hidden="true"
      className={`w-9 h-12 md:w-11 md:h-[60px] object-cover rounded-[4px] border border-tumlet-brown/30 shadow-sm ${className}`}
    />
  );
}

function Stack({ count }: { count: number }) {
  return (
    <div className="relative" style={{ width: 44 + (count - 1) * 4, height: 60 + (count - 1) * 4 }}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="absolute" style={{ left: i * 4, top: (count - 1 - i) * 4 }}>
          <CardBack />
        </div>
      ))}
    </div>
  );
}

function Zone({ label, sub, children }: { label: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex gap-1.5 items-end min-h-[64px]">{children}</div>
      <div className="font-baloo font-bold text-sm leading-tight">{label}</div>
      <div className="text-xs text-tumlet-text/60 leading-tight max-w-[14ch]">{sub}</div>
    </div>
  );
}

function PlayerArea({ name, you }: { name: string; you?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`font-baloo font-extrabold ${you ? 'text-tumlet-primaryRed' : 'text-tumlet-text/60'}`}>{name}</div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        <Zone label="Hand" sub="2 cards, secret">
          <CardBack />
          <CardBack />
        </Zone>
        <Zone label="Draw pile" sub="3 cards, in your order">
          <Stack count={3} />
        </Zone>
        <Zone label="Momo" sub="Start with 2">
          <img src={`${ASSET}/images/momo.png`} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
          <img src={`${ASSET}/images/momo.png`} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
        </Zone>
      </div>
    </div>
  );
}

function TableLayout() {
  return (
    <figure className="mt-10 rounded-2xl bg-tumlet-beige border-2 border-tumlet-primaryYellow/50 p-6 md:p-10">
      <div className="flex flex-col items-center gap-8">
        <PlayerArea name="Opponent" />
        <div className="w-full border-y-2 border-dashed border-tumlet-primaryYellow/70 py-6 flex justify-center">
          <Zone label="The court" sub="5 cards, face-down, shared">
            <Stack count={5} />
          </Zone>
        </div>
        <PlayerArea name="You" you />
      </div>
      <figcaption className="text-sm text-tumlet-text/60 text-center mt-6">
        The table after setup. The momo pile sits to one side as usual.
      </figcaption>
    </figure>
  );
}

/* ── Sections ────────────────────────────────────────────────────── */

function Intro() {
  return (
    <div className={SECTION}>
      <span className="inline-block font-outfit text-xs font-bold uppercase tracking-[0.16em] text-tumlet-primaryRed bg-tumlet-beige rounded-full px-3 py-1">
        Rules manual · Variant
      </span>
      <h1 className="font-baloo font-extrabold leading-tight tracking-tight mt-4 mb-4 text-4xl md:text-6xl text-tumlet-text">
        Bluff Momo for 2 players
      </h1>
      <p className={LEAD}>
        A head-to-head version of Bluff Momo. Each player gets five lives instead of two, but you only ever hold two of
        them at a time.
      </p>
      <p className={`${BODY} mt-6 max-w-[60ch]`}>
        This manual assumes you already know the standard game. If you don't, read the{' '}
        <Link to="/bluff-momo-rules/" className="underline font-semibold">
          Bluff Momo rules
        </Link>{' '}
        first. Anything this manual does not mention works exactly as it does there.
      </p>
    </div>
  );
}

function Contents() {
  return (
    <nav aria-label="Contents" className={`${SECTION} mt-12`}>
      <div className="rounded-xl border-2 border-tumlet-text/10 p-6 md:p-7">
        <div className="flex items-center gap-2 font-baloo font-bold text-lg">
          <BookOpen size={20} className="text-tumlet-primaryRed" />
          Contents
        </div>
        <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 list-none">
          {CHAPTERS.map((c, i) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="flex gap-3 text-tumlet-text/80 hover:text-tumlet-primaryRed">
                <span className="font-outfit font-bold text-tumlet-primaryRed w-6 flex-none">{i + 1}.</span>
                <span className="underline-offset-4 hover:underline">{c.title}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function Overview() {
  const stats = [
    ['5', 'cards per player'],
    ['2', 'in your hand at once'],
    ['3', 'waiting in your draw pile'],
    ['5', 'in the shared court'],
  ];
  const changes = [
    'You start with five cards. Two are your hand, three are a face-down draw pile you arrange yourself.',
    'When you lose a card, you replace it from your draw pile. You are out when all five are gone.',
    'भट्टीको दाई must name the character they are poisoning. A wrong guess misses.',
    'आमा cannot block a poison that names आमा. Only a claim of two आमा can.',
    'मन्त्री swaps with the court, never with anyone\'s draw pile.',
    'A food-poisoned player discards face-down, so you learn nothing about what they lost.',
  ];
  return (
    <Chapter id="overview">
      <div className="flex flex-wrap gap-3">
        {stats.map(([n, label]) => (
          <div key={label} className="rounded-xl bg-tumlet-beige border-2 border-tumlet-primaryYellow/40 px-5 py-3 min-w-[140px]">
            <div className="font-baloo font-extrabold text-3xl text-tumlet-primaryRed leading-none">{n}</div>
            <div className="text-sm text-tumlet-text/70 mt-1">{label}</div>
          </div>
        ))}
      </div>
      <h3 className={`${H3} mt-10`}>The changes at a glance</h3>
      <ul className="mt-3 space-y-2 max-w-[66ch]">
        {changes.map((c) => (
          <li key={c} className={`${BODY} flex gap-3`}>
            <span className="flex-none mt-2.5 w-1.5 h-1.5 rounded-full bg-tumlet-primaryRed" />
            {c}
          </li>
        ))}
      </ul>
      <p className={`${BODY} mt-6 max-w-[66ch]`}>
        The goal is the same: be the last one standing. With two players, that means knocking out all five of your
        opponent's cards before they knock out yours.
      </p>
    </Chapter>
  );
}

function Setup() {
  const counts = [
    ['After step 1', '5 (one of each)', '5'],
    ['After step 2', '6 (5 + 1 dealt)', '3'],
    ['After step 3', '5 (2 hand + 3 left)', '5'],
    ['After step 4', '2 hand + 3 draw pile', '5'],
  ];
  return (
    <Chapter id="setup">
      <p className={LEAD}>You need the 15 character cards and the momo. Setup takes about two minutes.</p>
      <Steps
        steps={[
          {
            title: 'Split the deck into three sets',
            body: (
              <>
                Sort the 15 cards into three sets, each with one of every character: हन्ते, चोर, भट्टीको दाई, आमा and
                मन्त्री. Give one set to each player, face-up so you can see your own. Shuffle the third set and put it
                face-down in the middle. This is <span className="font-bold text-tumlet-text">the court</span>.
              </>
            ),
          },
          {
            title: 'Deal one card from the court to each player',
            body: (
              <>
                Deal one card face-down from the court to each player. Look at it, but keep it apart from your set. It
                is the first card of your starting hand, and you don't get to choose it.
              </>
            ),
          },
          {
            title: 'Pick your second card and give one back',
            body: (
              <>
                From your set of five, choose one card to be the second card in your hand. Then pick one of the four
                cards left over and put it face-down into the court. Shuffle the court once both players have added
                their card.
              </>
            ),
          },
          {
            title: 'Stack your draw pile',
            body: (
              <>
                Put your last three cards face-down in a pile in the order you want to draw them, with the card you want
                first on top. This is your <span className="font-bold text-tumlet-text">draw pile</span>. You can't
                rearrange it later.
              </>
            ),
          },
          {
            title: 'Take 2 momo each and start',
            body: (
              <>
                Each player takes 2 momo from the pile. The player who did not deal goes first, and turns alternate
                from there.
              </>
            ),
          },
        ]}
      />

      <h3 className={`${H3} mt-14`}>Check your counts</h3>
      <p className={`${BODY} mt-1 mb-4 max-w-[60ch]`}>If your numbers don't match this table, something went wrong. Fix it before you start.</p>
      <div className="overflow-x-auto rounded-xl border-2 border-tumlet-text/10">
        <table className="w-full min-w-[460px] border-collapse text-left">
          <thead className="bg-tumlet-beige">
            <tr>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Step</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Each player holds</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Court</th>
            </tr>
          </thead>
          <tbody>
            {counts.map(([step, player, court]) => (
              <tr key={step} className="border-t-2 border-tumlet-text/10">
                <td className="px-5 py-3 font-semibold whitespace-nowrap">{step}</td>
                <td className={`px-5 py-3 ${BODY}`}>{player}</td>
                <td className={`px-5 py-3 ${BODY}`}>{court}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <TableLayout />

      <div className="mt-10">
        <Callout tone="yellow" icon={<Lightbulb size={20} />}>
          <span className="font-bold">Think about the order.</span> Your draw pile decides what you hold later in the
          game. A strong card on top gets you back in the fight quickly. A strong card at the bottom is saved for the
          end, if you get there.
        </Callout>
      </div>
    </Chapter>
  );
}

function Losing() {
  return (
    <Chapter id="losing">
      <p className={LEAD}>Every card you lose comes out of your hand. Your draw pile then refills it.</p>
      <Steps
        steps={[
          { title: 'Lose the card', body: 'Take the card out of your hand and put it in a discard pile beside you. Lost cards are out of the game.' },
          { title: 'Draw the top card of your draw pile', body: 'Put it straight into your hand without showing it. If you lost two cards at once, draw two.' },
          { title: 'Play on with what you have', body: 'Once your draw pile is empty, you play the rest of the game with whatever is left in your hand. When your last card goes, you are out and your opponent wins.' },
        ]}
      />
      <div className="mt-10">
        <Callout tone="yellow" icon={<Lightbulb size={20} />}>
          <span className="font-bold">Face-up or face-down?</span> A card lost to a named poison is shown face-up. A
          card lost to food-poison goes face-down. Any other lost card is your choice from your hand and goes into your
          discard pile face-down.
        </Callout>
      </div>
    </Chapter>
  );
}

function Turn() {
  const rows = [
    ['चुपचाप move', 'Take 1 momo from the middle pile.', 'No change'],
    ['हन्ते', 'Take 3 momo from the middle pile.', 'No change'],
    ['चोर', 'Steal 2 momo from your opponent.', 'No change'],
    ['भट्टीको दाई', 'Pay 3 momo and name a character to poison.', 'Changed, see section 5'],
    ['आमा', 'Blocks भट्टीको दाई.', 'Changed, see section 6'],
    ['मन्त्री', 'Look at one of your opponent\'s cards, or swap a card with the court.', 'Changed, see section 7'],
    ['Food-poison', 'Pay 7 momo. Your opponent loses a card.', 'Changed, see section 8'],
  ];
  return (
    <Chapter id="turn">
      <p className={LEAD}>
        Turns work as normal. On your turn you take one action, and your opponent may block it or challenge it. The
        full plate rule still applies: at 10 momo or more, you must food-poison on your next turn.
      </p>
      <div className="mt-8 overflow-x-auto rounded-xl border-2 border-tumlet-text/10">
        <table className="w-full min-w-[620px] border-collapse text-left">
          <thead className="bg-tumlet-beige">
            <tr>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">Action</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">What it does</th>
              <th className="font-outfit text-sm font-bold uppercase tracking-wide px-5 py-3">In this variant</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, what, status]) => (
              <tr key={name} className="border-t-2 border-tumlet-text/10">
                <td className="px-5 py-4 font-bold whitespace-nowrap">{name}</td>
                <td className={`px-5 py-4 ${BODY}`}>{what}</td>
                <td className={`px-5 py-4 ${status === 'No change' ? 'text-tumlet-text/50' : 'text-tumlet-primaryRed font-semibold'}`}>
                  {status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Chapter>
  );
}

function Poison() {
  return (
    <Chapter id="poison">
      <p className={LEAD}>
        With five lives each, poison has to be aimed. You don't just poison your opponent, you poison a specific
        character you think they are holding.
      </p>
      <Steps
        steps={[
          {
            title: 'Claim भट्टीको दाई, pay, and name a character',
            body: <>Pay 3 momo and say which character you are poisoning, for example "भट्टीको दाई, I'm poisoning your चोर."</>,
          },
          {
            title: 'Your opponent can respond to the poison',
            body: (
              <>
                They can challenge your भट्टीको दाई claim, block with आमा (see section 6), or let it through. If the
                challenge or block works, the poison stops here. Your momo are spent either way.
              </>
            ),
          },
          {
            title: 'Your opponent answers: do they have it?',
            body: (
              <>
                If they say yes, they reveal the named card face-up and lose it. If they say no, the poison misses and
                they lose nothing.
              </>
            ),
          },
          {
            title: 'You can challenge a "no"',
            body: <>Your opponent is allowed to lie about not having the card. If you think they are, challenge them. See below.</>,
          },
        ]}
      />

      <h3 className={`${H3} mt-14 mb-5`}>When you challenge a "no"</h3>
      <p className={`${BODY} -mt-2 mb-5 max-w-[60ch]`}>Your opponent shows you their hand.</p>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={`${CARD} border-tumlet-primaryRed/50 shadow-[6px_6px_0px_0px_#F16146]`}>
          <XCircle size={26} className="text-tumlet-primaryRed" />
          <h4 className="font-baloo font-bold text-xl mt-3">The named card is there</h4>
          <p className={`${BODY} mt-2`}>
            They lied. They lose <span className="font-bold text-tumlet-text">two</span> cards: the named card, face-up,
            and one more of their choice. Then they draw two from their draw pile.
          </p>
        </div>
        <div className={`${CARD} border-tumlet-blue/50 shadow-[6px_6px_0px_0px_#BAC1E1]`}>
          <CheckCircle2 size={26} className="text-tumlet-darkBlue" />
          <h4 className="font-baloo font-bold text-xl mt-3">The named card is not there</h4>
          <p className={`${BODY} mt-2`}>
            They told the truth. You lose one card for the failed challenge. They shuffle the cards they showed into the
            court and draw the same number back from the court at random.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Callout tone="yellow" icon={<Lightbulb size={20} />}>
          <span className="font-bold">Example.</span> You pay 3 momo and poison your opponent's हन्ते. Nobody challenges
          and nobody blocks. Your opponent says "I don't have हन्ते." They took 3 momo with हन्ते two turns ago, so you
          challenge. They show their hand: हन्ते and आमा. They lose the हन्ते face-up plus one more card, and draw two new
          cards from their draw pile.
        </Callout>
      </div>
    </Chapter>
  );
}

function Aama() {
  return (
    <Chapter id="aama">
      <p className={LEAD}>आमा still blocks भट्टीको दाई, with one exception: she can't protect herself.</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className={CARD_POP}>
          <Shield size={26} className="text-tumlet-darkBlue" />
          <h3 className={`${H3} mt-3`}>Poison names any other character</h3>
          <p className={`${BODY} mt-2`}>Claim आमा to block it, as normal. Your opponent can challenge the claim.</p>
        </div>
        <div className={CARD_POP}>
          <AlertTriangle size={26} className="text-tumlet-primaryRed" />
          <h3 className={`${H3} mt-3`}>Poison names आमा</h3>
          <p className={`${BODY} mt-2`}>
            One आमा can't block it. You can only block by claiming <span className="font-bold text-tumlet-text">two</span>{' '}
            आमा: the second one protects the first.
          </p>
        </div>
      </div>

      <h3 className={`${H3} mt-14 mb-5`}>When a double आमा is challenged</h3>
      <p className={`${BODY} -mt-2 mb-5 max-w-[60ch]`}>The player who claimed it shows their hand.</p>
      <div className="grid gap-5 md:grid-cols-2">
        <div className={`${CARD} border-tumlet-primaryRed/50 shadow-[6px_6px_0px_0px_#F16146]`}>
          <XCircle size={26} className="text-tumlet-primaryRed" />
          <h4 className="font-baloo font-bold text-xl mt-3">They don't have two आमा</h4>
          <p className={`${BODY} mt-2`}>
            They lose <span className="font-bold text-tumlet-text">two</span> cards, one for the poison and one for the
            bluff, and draw two from their draw pile.
          </p>
        </div>
        <div className={`${CARD} border-tumlet-blue/50 shadow-[6px_6px_0px_0px_#BAC1E1]`}>
          <CheckCircle2 size={26} className="text-tumlet-darkBlue" />
          <h4 className="font-baloo font-bold text-xl mt-3">They have both</h4>
          <p className={`${BODY} mt-2`}>
            The poison is blocked and the challenger loses one card. The player shuffles both आमा into the court and
            draws two new cards from the court at random.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <Callout tone="yellow" icon={<Lightbulb size={20} />}>
          <span className="font-bold">Count the आमा.</span> There are only three in the game. Before you claim two,
          remember that one started in each player's set.
        </Callout>
      </div>
    </Chapter>
  );
}

function Mantri() {
  return (
    <Chapter id="mantri">
      <p className={LEAD}>मन्त्री works as normal, with one rule about where the cards come from.</p>
      <ul className="mt-6 space-y-3 max-w-[66ch]">
        <li className={`${BODY} flex gap-3`}>
          <span className="flex-none mt-2.5 w-1.5 h-1.5 rounded-full bg-tumlet-primaryRed" />
          <span>
            <span className="font-bold text-tumlet-text">To swap a card,</span> draw from the court, look at it, and put
            any one card from your hand back into the court. Shuffle the court afterwards.
          </span>
        </li>
        <li className={`${BODY} flex gap-3`}>
          <span className="flex-none mt-2.5 w-1.5 h-1.5 rounded-full bg-tumlet-primaryRed" />
          <span>
            <span className="font-bold text-tumlet-text">Draw piles are off limits.</span> You never draw from, look at,
            or put cards into anyone's draw pile, including your own.
          </span>
        </li>
        <li className={`${BODY} flex gap-3`}>
          <span className="flex-none mt-2.5 w-1.5 h-1.5 rounded-full bg-tumlet-primaryRed" />
          <span>
            <span className="font-bold text-tumlet-text">Looking at a card</span> means a card in your opponent's hand,
            never their draw pile.
          </span>
        </li>
      </ul>
    </Chapter>
  );
}

function FoodPoison() {
  return (
    <Chapter id="food-poison">
      <p className={LEAD}>
        Pay 7 momo and your opponent loses a card. It can't be blocked or challenged. The only change is how the card
        is lost.
      </p>
      <div className="mt-8">
        <Callout tone="red" icon={<Flame size={20} />}>
          <span className="font-bold">Discarded face-down.</span> Your opponent picks a card from their hand and
          discards it face-down. You don't get to see it. Then they draw from their draw pile as normal.
        </Callout>
      </div>
    </Chapter>
  );
}

function Challenges() {
  return (
    <Chapter id="challenges">
      <p className={LEAD}>Challenges work as normal. Whoever is wrong loses a card, then draws from their draw pile.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className={`${CARD} border-tumlet-blue/50 shadow-[6px_6px_0px_0px_#BAC1E1]`}>
          <CheckCircle2 size={26} className="text-tumlet-darkBlue" />
          <h3 className={`${H3} mt-3`}>The claim was true</h3>
          <p className={`${BODY} mt-2`}>
            The challenger loses a card. The player who was challenged shuffles the revealed card, or cards, into the
            court and draws the same number back from the court at random. Their action still happens.
          </p>
        </div>
        <div className={`${CARD} border-tumlet-primaryRed/50 shadow-[6px_6px_0px_0px_#F16146]`}>
          <XCircle size={26} className="text-tumlet-primaryRed" />
          <h3 className={`${H3} mt-3`}>The claim was a bluff</h3>
          <p className={`${BODY} mt-2`}>
            The bluffer loses a card and the challenger wins 1 momo, as in the standard game. The action does not happen.
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Callout tone="red" icon={<AlertTriangle size={20} />}>
          <span className="font-bold">Two-card losses.</span> Lying about a named poison, or getting caught on a double
          आमा, costs two cards at once. With five lives that hurts less than in the standard game, but it can still
          empty your hand in one turn.
        </Callout>
      </div>
    </Chapter>
  );
}

function Reference() {
  const rows = [
    ['Setup', 'Three sets of one of each character. One set each, one set is the court. Deal 1 from the court, choose 1 from your set, return 1 to the court, stack 3 as your draw pile. 2 momo each.'],
    ['Lives', '5 per player. 2 in hand, 3 in the draw pile.'],
    ['Losing a card', 'Discard from hand, draw the top card of your draw pile. Out when all 5 are gone.'],
    ['चुपचाप move, हन्ते, चोर', 'No change.'],
    ['भट्टीको दाई', 'Pay 3 and name a character. Hit: it is revealed face-up and lost. Miss: nothing. A "no" can be challenged. Caught lying: lose 2.'],
    ['आमा', 'Blocks poison, except poison that names आमा. That needs a claim of two आमा. Caught bluffing: lose 2.'],
    ['मन्त्री', 'Swaps with the court only. Never touches a draw pile.'],
    ['Food-poison', 'Pay 7. Opponent discards a card of their choice face-down.'],
    ['Failed challenge', 'Revealed cards go into the court. Draw the same number back from the court at random.'],
  ];
  return (
    <Chapter id="reference">
      <p className={LEAD}>The whole variant on one screen.</p>
      <dl className="mt-8 divide-y-2 divide-tumlet-text/10 border-t-2 border-b-2 border-tumlet-text/10">
        {rows.map(([term, def]) => (
          <div key={term} className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-6 py-5">
            <dt className="font-bold">{term}</dt>
            <dd className={BODY}>{def}</dd>
          </div>
        ))}
      </dl>
      <p className={`${BODY} mt-10`}>
        Need the base rules?{' '}
        <Link to="/bluff-momo-rules/" className="underline font-semibold">
          Read the standard Bluff Momo rules
        </Link>
        .
      </p>
    </Chapter>
  );
}

export default BluffMomoTwoPlayer;
