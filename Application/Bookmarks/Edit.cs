using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using AutoMapper;
using Domain;
using FluentValidation;
using Application.Interfaces;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Edit
    {
        public class Command : IRequest<Result<Unit>>
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

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {                
                var bookmark = await _context.Bookmarks.FindAsync(request.Bookmark.Id);

                if (bookmark == null) return null;

                _mapper.Map(request.Bookmark, bookmark);

                _context.Users.Attach(bookmark.Owner);

                var result = await _context.SaveChangesAsync() > 0;

                if (!result) return Result<Unit>.Failure("Failed to update bookmark");

                return Result<Unit>.Success(Unit.Value);
            }
        }
    }
}