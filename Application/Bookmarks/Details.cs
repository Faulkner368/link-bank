using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Details
    {
        public class Query : IRequest<Bookmark>
        {   
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Bookmark>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Bookmark> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Bookmarks.FindAsync(request.Id);
            }
        }
    }
}