import React from 'react';
import teamData from './mockTeam.json';

const avatarColors = [
  'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-pink-500', 'bg-purple-500', 'bg-red-500', 'bg-teal-500', 'bg-orange-500',
];

const getInitials = (name: string) => {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase();
};

const TeamCard: React.FC = () => {
  return (
    <div className="bg-[#181f26] rounded-2xl shadow-lg p-6 max-w-sm w-full mx-auto text-white border border-gray-700">
      <div className="mb-2">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight uppercase">{teamData.teamName}</h2>
        <div className="text-gray-400 text-sm mt-1">Manager: {teamData.manager}</div>
        <div className="text-gray-400 text-sm">Captain: {teamData.captain}</div>
      </div>
      <div className="mt-4 space-y-4">
        {teamData.groups.map((group, i) => (
          <div key={group.groupName}>
            <div className="font-bold text-lg mb-1 mt-2">{group.groupName}</div>
            <div className="space-y-2">
              {group.players.map((player, j) => (
                <div key={player.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center mr-3 text-lg font-bold ${avatarColors[(i*3+j)%avatarColors.length]}`}>{getInitials(player.name)}</div>
                    <span className="font-medium text-base">{player.name}</span>
                    {player.name === teamData.captain && (
                      <span className="ml-2 text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">C</span>
                    )}
                  </div>
                  <span className="font-bold text-lg">{player.points}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard; 