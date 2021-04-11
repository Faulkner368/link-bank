using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Bookmarks
{
    public class List
    {
        public class Query : IRequest<List<Bookmark>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Bookmark>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Bookmark>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Bookmarks.ToListAsync();
            }
        }
    }
}