
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
      action: "take 3 momo from the middle pile in one move",
      blocks: "X",
    },
    {
      id: "chor",
      name: "चोर",
      action: "steal 2 momo from any player",
      blocks: "blocks चोर's attempt to steal your momo",
    },
    {
      id: "bhattiko-dai",
      name: "भट्टीको दाई",
      action: "use 3 momo to poison any player (They lose one card)",
      blocks: "X",
    },
    {
      id: "aama",
      name: "आमा",
      action: "X",
      blocks: "blocks भट्टीको दाई's poison attempt",
    },
    {
      id: "mantri",
      name: "मन्त्री",
      action: "force any player to show one of their cards or draw a new card from the deck, look at it, and put back any 1 of your cards",
      blocks: "blocks चोर's attempt to steal your momo and मन्त्री's attempt to look at your card",
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
        <div className='flex flex-col gap-4 justify-center h-[600px] mb-[48px]'>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:text-center">how to play bluff momo?</h1>
           <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/di6Ek8Nf4mQ?si=QPyyUvBOyPjzArWc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-4">character reference table</h2>
        <div className="overflow-x-auto" ref={tableRef}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">character</TableHead>
                <TableHead className="font-bold">action</TableHead>
                <TableHead className="font-bold">blocks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">—</TableCell>
                <TableCell>take 1 momo from the middle</TableCell>
                <TableCell>cannot be blocked or challenged</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">—</TableCell>
                <TableCell>use 7 momo to food-poison another player (they lose one card)</TableCell>
                <TableCell>cannot be blocked or challenged</TableCell>
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
