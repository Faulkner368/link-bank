using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Create
    {
        public class Command : IRequest
        {
            public Bookmark Bookmark { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(bm => bm.Bookmark).SetValidator(new BookmarkValidator());
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                request.Bookmark.DateCreated = DateTime.UtcNow;
                _context.Bookmarks.Add(request.Bookmark);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}