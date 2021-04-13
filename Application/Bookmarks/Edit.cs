using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Bookmarks
{
    public class Edit
    {
        public class Command: IRequest
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
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var bookmark = await _context.Bookmarks.FindAsync(request.Bookmark.Id);

                _mapper.Map(request.Bookmark, bookmark);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}