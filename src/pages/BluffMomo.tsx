
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
      action: "Force any player to show one of their cards or draw a new card from the deck, look at it, and put back any 1 of your cards",
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
          Character Reference
        </Button>
      </nav>
      
      <div className="px-6 md:px-12 lg:px-36 py-6">
        <div className='flex flex-col gap-4 justify-center h-[600px] mb-[48px]'>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:text-center">How to play bluff momo?</h1>
           <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/di6Ek8Nf4mQ?si=QPyyUvBOyPjzArWc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-4">Character reference table</h2>
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
                <TableCell>Use 7 momo to food-poison another player (they lose one card)</TableCell>
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
        
        <div className="mt-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Want to play Bluff Momo with your team? We host <Link to="/corporate-game-night" className="underline hover:text-tumlet-text/80 text-tumlet-text">corporate game nights</Link> where we bring games to your office and run the entire session.
          </p>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default BluffMomo;
