"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import {
    Bold,
    Italic,
    Underline as UnderlineIcon,
    List,
    ListOrdered,
    Heading1,
    Heading2,
    Heading3,
    Link as LinkIcon,
    Unlink,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Quote,
    Undo,
    Redo
} from 'lucide-react'
import { useEffect } from 'react'

interface RichTextEditorProps {
    content: string
    onChange: (content: string) => void
}

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) return null

    const addLink = () => {
        const url = window.prompt('URL')
        if (url) {
            editor.chain().focus().setLink({ href: url }).run()
        }
    }

    return (
        <div className="flex flex-wrap gap-1 p-2 border-b border-[#E2E8F0] bg-[#F8FAFC] sticky top-0 z-10 transition-all">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('bold') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Gras"
            >
                <Bold className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('italic') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Italique"
            >
                <Italic className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('underline') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Souligné"
            >
                <UnderlineIcon className="w-4 h-4" />
            </button>

            <div className="w-px h-6 bg-[#E2E8F0] mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Titre 1"
            >
                <Heading1 className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('heading', { level: 2 }) ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Titre 2"
            >
                <Heading2 className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('heading', { level: 3 }) ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Titre 3"
            >
                <Heading3 className="w-4 h-4" />
            </button>

            <div className="w-px h-6 bg-[#E2E8F0] mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('bulletList') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Liste à puces"
            >
                <List className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('orderedList') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Liste ordonnée"
            >
                <ListOrdered className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('blockquote') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Citation"
            >
                <Quote className="w-4 h-4" />
            </button>

            <div className="w-px h-6 bg-[#E2E8F0] mx-1 self-center" />

            <button
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive({ textAlign: 'left' }) ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Aligner à gauche"
            >
                <AlignLeft className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive({ textAlign: 'center' }) ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Centrer"
            >
                <AlignCenter className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive({ textAlign: 'right' }) ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Aligner à droite"
            >
                <AlignRight className="w-4 h-4" />
            </button>

            <div className="w-px h-6 bg-[#E2E8F0] mx-1 self-center" />

            <button
                onClick={addLink}
                className={`p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors ${editor.isActive('link') ? 'bg-[#0B2C4D] text-white' : 'text-[#64748B]'}`}
                title="Ajouter un lien"
            >
                <LinkIcon className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().unsetLink().run()}
                disabled={!editor.isActive('link')}
                className="p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors text-[#64748B] disabled:opacity-30"
                title="Supprimer le lien"
            >
                <Unlink className="w-4 h-4" />
            </button>

            <div className="flex-grow" />

            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
                className="p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors text-[#64748B] disabled:opacity-30"
                title="Annuler"
            >
                <Undo className="w-4 h-4" />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
                className="p-2 rounded-lg hover:bg-[#E2E8F0] transition-colors text-[#64748B] disabled:opacity-30"
                title="Rétablir"
            >
                <Redo className="w-4 h-4" />
            </button>
        </div>
    )
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
    // Use the content only for initial load
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    levels: [1, 2, 3],
                },
                bulletList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
                orderedList: {
                    keepMarks: true,
                    keepAttributes: false,
                },
            }),
            Underline,
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-[#C9A24D] underline hover:text-[#0B2C4D] transition-colors cursor-pointer'
                }
            }),
            Placeholder.configure({
                placeholder: 'Commencez à rédiger votre histoire ici...',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML()
            // Only fire onChange if the HTML has actually changed
            onChange(html)
        },
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-lg prose-slate max-w-none focus:outline-none min-h-[400px] p-8 text-[#0B2C4D] prose-headings:font-serif prose-headings:text-[#0B2C4D]'
            }
        }
    })

    // Only update internal content if it changes externally AND significantly
    // This mostly handles the "initial load" after the parent state is settled
    useEffect(() => {
        if (!editor) return

        const currentHtml = editor.getHTML()
        if (content && content !== currentHtml && currentHtml === '<p></p>') {
            editor.commands.setContent(content, { emitUpdate: false })
        }
    }, [content, editor])

    return (
        <div className="w-full border border-[#E2E8F0] rounded-[2rem] overflow-hidden focus-within:ring-2 focus-within:ring-[#C9A24D]/20 transition-all bg-white shadow-sm">
            <MenuBar editor={editor} />
            <div className="rich-text-container">
                <EditorContent editor={editor} />
            </div>
            <style jsx global>{`
                .rich-text-container .tiptap {
                    min-height: 400px;
                }
                .rich-text-container .tiptap p.is-editor-empty:first-child::before {
                    color: #adb5bd;
                    content: attr(data-placeholder);
                    float: left;
                    height: 0;
                    pointer-events: none;
                }
                /* Ensure lists are visible inside the editor */
                .tiptap ul {
                    list-style-type: disc !important;
                    padding-left: 1.5rem !important;
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important;
                }
                .tiptap ol {
                    list-style-type: decimal !important;
                    padding-left: 1.5rem !important;
                    margin-top: 1rem !important;
                    margin-bottom: 1rem !important;
                }
                .tiptap li {
                    margin-bottom: 0.5rem !important;
                }
                .tiptap blockquote {
                    border-left: 4px solid #C9A24D !important;
                    padding-left: 1rem !important;
                    font-style: italic !important;
                    color: #64748B !important;
                    margin: 1.5rem 0 !important;
                }
                /* Distinct heading styles */
                .tiptap h1 {
                    font-size: 2.25rem !important;
                    line-height: 2.5rem !important;
                    margin-top: 2rem !important;
                    margin-bottom: 1rem !important;
                    font-weight: 700 !important;
                }
                .tiptap h2 {
                    font-size: 1.875rem !important;
                    line-height: 2.25rem !important;
                    margin-top: 1.5rem !important;
                    margin-bottom: 0.75rem !important;
                    font-weight: 700 !important;
                }
                .tiptap h3 {
                    font-size: 1.5rem !important;
                    line-height: 2rem !important;
                    margin-top: 1.25rem !important;
                    margin-bottom: 0.5rem !important;
                    font-weight: 600 !important;
                }
            `}</style>
        </div>
    )
}
