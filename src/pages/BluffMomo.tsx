
import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CharacterInfo {
  id: string;
  name: string;
  action: string;
  blocks: string;
}

const BluffMomo = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  
  const scrollToTable = () => {
    if (tableRef.current) {
      tableRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const characters: CharacterInfo[] = [
    {
      id: "hante",
      name: "हन्ते",
      action: "Take 3 momo from the middle pile in one move",
      blocks: "X",
    },
    {
      id: "chor",
      name: "चोर",
      action: "Steal 2 momo from any player",
      blocks: "Blocks चोर's attempt to steal your momo",
    },
    {
      id: "bhattiko-dai",
      name: "भट्टीको दाई",
      action: "Use 3 momo to poison any player (They lose one card)",
      blocks: "X",
    },
    {
      id: "aama",
      name: "आमा",
      action: "X",
      blocks: "Blocks भट्टीको दाई's poison attempt",
    },
    {
      id: "mantri",
      name: "मन्त्री",
      action: "Force any player to show one of their cards OR draw a new card from the deck, look at it, and put back any 1 of your cards",
      blocks: "Blocks चोर's attempt to steal your momo and मन्त्री's attempt to look at your card",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex flex-row justify-between items-center px-6 md:px-12 lg:px-36 py-6">
        <Link to="/">
          <img className="w-[120px] md:w-[200px]" src="/tumlet-logo.png" alt="Tumlet Logo" />
        </Link>
        <Button 
          onClick={scrollToTable}
          className="nav-button"
        >
          character reference
        </Button>
      </nav>
      
      <div className="px-6 md:px-12 lg:px-36 py-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:text-center">Bluff Momo—The Rule Book</h1>
        
        <div className="text-lg mb-8">
          You are walking in the ancient streets of Kathmandu craving some delicious momo. 
          But there are mysterious strangers lurking around, sneaky thieves watching, and some shady vendors serving poisonous momo. 
          To win, you'll need sharp instinct, quick thinking, and clever talk.
        </div>
        
        <Tabs defaultValue="goal" className="mb-8">
          <div className="overflow-x-auto">
            <TabsList className="mb-4 flex-nowrap">
              <TabsTrigger value="goal">Goal</TabsTrigger>
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="howtoplay">How to Play</TabsTrigger>
              <TabsTrigger value="bluffing">Bluffing</TabsTrigger>
              <TabsTrigger value="special">Special Rules</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="goal" className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Goal of the game</h2>
            <p>Your goal is simple: be the last one standing. Use momo and character cards to get rid of other's cards while protecting your own. If you have no cards left, you are out of the game. Bluff, deceive and strike before others do.</p>
          </TabsContent>
          
          <TabsContent value="setup" className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">The setup</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Place all the momo in the middle. Each player takes 2 momo from it.</li>
              <li>Shuffle the 15 character cards (5 characters, 3 of each) and deal 2 cards to each player.</li>
              <li>Place the remaining cards face-down in the center.</li>
              <li>Players secretly look at their own cards and keep them face-down.</li>
            </ol>
          </TabsContent>
          
          <TabsContent value="howtoplay" className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">How to play Bluff Momo?</h2>
            <p className="mb-4">Starting with the player to the right of the dealer, each must take one of the following actions in their turn:</p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Basic actions (No one can stop these)</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>चुपचाप move:</strong> Take 1 momo from the middle pile.</li>
              <li><strong>Food-poison:</strong> If you have 7 momo, use them to poison any player, making them lose a card.</li>
            </ul>
            
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 mb-4">
              <p className="font-semibold">Note: If you have collected 10+ momo (a full plate), you must food-poison another player in your next turn.</p>
            </div>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Select a character to see its powers:</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
              {characters.map((char) => (
                <div 
                  key={char.id}
                  className={`character-card ${selectedCharacter === char.id ? 'active' : ''}`}
                  onClick={() => setSelectedCharacter(char.id)}
                >
                  <div className="aspect-square bg-tumlet-beige overflow-hidden">
                    <div className="flex items-center justify-center h-full bg-tumlet-beige">
                      <span className="text-2xl md:text-3xl">{char.name}</span>
                    </div>
                  </div>
                  <div className="p-2 text-center">
                    <h4 className="font-bold">{char.name}</h4>
                  </div>
                </div>
              ))}
            </div>
            
            {selectedCharacter && (
              <div className="mt-4 p-4 bg-tumlet-beige border border-tumlet-brown rounded-lg">
                <h3 className="text-xl font-bold mb-2">
                  {characters.find(c => c.id === selectedCharacter)?.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-1">Action:</h4>
                    <p>{characters.find(c => c.id === selectedCharacter)?.action}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Blocks:</h4>
                    <p>{characters.find(c => c.id === selectedCharacter)?.blocks}</p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="bluffing" className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Bluffing and challenges</h2>
            <p className="mb-4">
              The fun part of Bluff Momo is that you don't actually need to have a character card to use its power, you can bluff! 
              You can claim to have a character card (to either take an action or block another player's action). 
              But any player can challenge you to reveal the claimed card and prove it:
            </p>
            
            <Card className="mb-4">
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-green-700">If you were telling the truth:</h3>
                <p>The challenger loses 1 card of their choice (return it face-down to the deck) and you swap the revealed card with a random card from the deck.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-red-700">If you were bluffing:</h3>
                <p>You lose 1 card of your choice (return it face-down to the deck) and the challenger wins 1 momo from the pile.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="special" className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">Special case: The "Double trouble" rule</h2>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-4">
              <p className="mb-2"><strong>If someone poisons you using भट्टीको दाई and you:</strong></p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <strong>Challenge their claim:</strong> If they were telling the truth and show भट्टीको दाई, you lose BOTH your cards (one for the poison, one for the failed challenge).
                </li>
                <li>
                  <strong>Bluff to have आमा to block it:</strong> But if someone challenges you to show आमा, you lose both the cards (one for the poison, one for failed bluff).
                </li>
              </ol>
            </div>
          </TabsContent>
        </Tabs>
        
        <h2 className="text-xl md:text-2xl font-bold mb-4">Character Reference Table</h2>
        <div className="overflow-x-auto" ref={tableRef}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Character</TableHead>
                <TableHead className="font-bold">Action</TableHead>
                <TableHead className="font-bold">Blocks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">—</TableCell>
                <TableCell>Take 1 momo from the middle</TableCell>
                <TableCell>Cannot be blocked or challenged</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">—</TableCell>
                <TableCell>Use 7 momo to food-poison another player (They lose one card)</TableCell>
                <TableCell>Cannot be blocked or challenged</TableCell>
              </TableRow>
              {characters.map((char) => (
                <TableRow key={char.id}>
                  <TableCell className="font-medium">{char.name}</TableCell>
                  <TableCell>{char.action}</TableCell>
                  <TableCell>{char.blocks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BluffMomo;
